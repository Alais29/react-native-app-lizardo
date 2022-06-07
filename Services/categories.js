import axios from "axios";
import { DB_URL } from "../Constants/firebase";

export const getCategories = async () => {
  try {
    const response = await axios.get(`${DB_URL}categories.json`);
    if (response.data === null) {
      throw Error();
    } else {
      return response.data;
    }
  } catch (e) {
    throw new Error("There was an error getting the categories");
  }
};
