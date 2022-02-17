import messageStorage from "../stores/messageStorage";
import moment from "moment";

//* Get Config
const getStatePage = () => {
  const CONFIG = messageStorage.getInstance().getMessage('config');
  const data = CONFIG['Page Setting'].data;
  const index = data.findIndex((v, i, obj) => {
    if (v['Page Name'] === 'whitelist') {
      return true;
    }
    return false;
  });

  const pageSetting = data[index];
  return pageSetting.Toggle === 'TRUE';
};

const getConfigRoundData = () => {
  const CONFIG = messageStorage.getInstance().getMessage("config");
  let boonData = {};
  if (CONFIG["Round Setting"] !== null) {
    const data = CONFIG["Round Setting"].data;

    const index = data.findIndex((v, i, obj) => {
      if (
        moment(v.Start).subtract(1, "days").isBefore(moment()) &&
        moment(v.End).add(1, "days").isAfter(moment())
      ) {
        return true;
      }
      return false;
    });

    if (index !== -1) {
      boonData = data[index];
    }
    return boonData;
  }
  return {};
};

export { getStatePage, getConfigRoundData };
