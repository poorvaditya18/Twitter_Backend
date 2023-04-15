import { helper } from "../services/helper-service.js";

export const execute = () => {
  const result = helper(); // the test for helper function will be written separately .
  // not actually calling the helper() function , we will just mock it .
  // we will mock this function
  if (result) {
    return "Learning JS";
  } else {
    return "learning ReactJs";
  }
};
