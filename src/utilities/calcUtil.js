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

export { calValueDeposit, findAvaxValue, findBoonValue };
