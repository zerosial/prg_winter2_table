import { checkFetchData } from "./checkError.js";
import { API_END_POINT, ERROR_MESSAGE } from "./constants.js";

export const getItems = async () => {
  try {
    const res = await fetch(`${API_END_POINT}`);

    if (!res.ok) {
      throw new Error(ERROR_MESSAGE.NOT_COLLECT_NETWORK);
    }

    const jsonData = await res.json();

    checkFetchData(jsonData);

    return jsonData;
  } catch (err) {
    throw new Error(err);
  }
};
