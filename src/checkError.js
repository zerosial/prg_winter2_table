import { ERROR_MESSAGE } from "./constants.js";

export const isConstructor = (target) => {
  if (!target) {
    throw new Error(ERROR_MESSAGE.NOT_CONSTRUCTOR);
  }
};

export const checkFetchData = (data) => {
  isArray(data);
  data.forEach((obj) => checkObject(obj));
};

const checkObject = (obj) => {
  const keys = Object.keys(obj);
  if (!keys.includes("name")) {
    throw new Error(ERROR_MESSAGE.NOT_INCLUDED_NAME);
  }

  if (!keys.includes("title")) {
    throw new Error(ERROR_MESSAGE.NOT_INCLUDED_TITLE);
  }

  if (!keys.includes("email")) {
    throw new Error(ERROR_MESSAGE.NOT_INCLUDED_EMAIL);
  }

  if (!keys.includes("role")) {
    throw new Error(ERROR_MESSAGE.NOT_INCLUDED_ROLE);
  }
};

export const isArray = (input) => {
  if (!Array.isArray(input)) {
    throw new Error(ERROR_MESSAGE.NOT_ARRAY);
  }
};
