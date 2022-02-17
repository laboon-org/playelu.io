// import usePromise from "react-promise-suspense";
import messageStorage from "../stores/messageStorage";
import restApi from "../api/rest/RestApi.js";

// from google sheet
const loadDataConfig = async () => {
  const data = await restApi
    .post("/config")
    .then((response) => response.data.content);
  messageStorage.getInstance().setMessage("config", data);
};

export { loadDataConfig };
