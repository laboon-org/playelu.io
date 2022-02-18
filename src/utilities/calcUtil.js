import messageStorage from "../stores/messageStorage";
import moment from "moment";

const calValueDeposit = (amount) => {
  const avaxValueUSD = findAvaxValue();
  const boonValueUSD = findBoonValue();

  const calAvaxAmount = (boonAmount) => {
    const USD = boonAmount * boonValueUSD;
    return USD / avaxValueUSD;
  };

  const boonAmount = parseInt(amount.split(".").join(""));
  const avaxAmount = Math.round(calAvaxAmount(boonAmount) * 1000) / 1000 + "";
  return avaxAmount.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

const findBoonValue = () => {
  const CONFIG = messageStorage.getInstance().getMessage("config");
  if (CONFIG["Round Setting"] !== null) {
    const data = CONFIG["Round Setting"].data;
    let boonValue = 0;
    const index = data.findIndex((v, i, obj) => {
      if (
        moment(v.Start).subtract(1, "days").isBefore(moment()) &&
        moment(v.End).add(1, "days").isAfter(moment())
      ) {
        return true;
      }
      return false;
    });

    // console.log("index = " + index);

    if (index !== -1) {
      boonValue = data[index]["Sell Price"];
    }
    return parseFloat(boonValue);
  }
  return 0;
};

const findAvaxValue = () => {
  const CONFIG = messageStorage.getInstance().getMessage("config");

  if (CONFIG.Common !== null) {
    const dataCommon = CONFIG.Common.data;
    let avaxValue = 0;
    const index = dataCommon.findIndex((v, i, obj) => {
      if (v.Key === "avax_value") {
        return true;
      }
      return false;
    });

    if (index !== -1) {
      avaxValue = dataCommon[index].Value;
    }
    return parseFloat(avaxValue);
  }
  return 0;
};

// Recursive function
const _processData = (obj, name, value) => {
  // Gia su name =[A,B,C]
  if (name.length === 1) {
    return {
      [name[0]]: value,
    };
  } else {
    if (name[0] in obj) {
      // Trương hợp đã có
      const temp = [...name]; // Bỏ phần tử đầu tiên
      temp.shift();
      const valueNew = _processData(obj[name[0]], temp, value);
      obj[name[0]] = {
        ...valueNew,
        ...obj[name[0]],
      };
    } else {
      // Trương hoợp lần đầu tiên
      obj[name[0]] = {};
      const temp = [...name]; // Bỏ phần tử đầu tiên
      temp.shift();
      const valueNew = _processData(obj[name[0]], temp, value);
      obj[name[0]] = {
        ...valueNew,
      };
    }
  }
};

const mapSettingData = (data) => {
  const setting = {};
  for (let i = 0; i < data.length; i++) {
    const pa = data[i];
    const name = pa.key;
    const value = pa.value;
    setting[name] = value;
  }
  return setting;
}

// GraphQL Data
const mapDynamicContent = (data) => {
  const mainObj = {};
  for (let key = 0; key < data.length; key++) {
    const pack = data[key];
    const name = pack.key.split("_");
    const value = pack.value;
    _processData(mainObj, name, value);
  }
  return mainObj;
};

export {
  calValueDeposit,
  findAvaxValue,
  findBoonValue,
  mapSettingData,
  mapDynamicContent,
};
