import { emailReg, passReg, validationErrorMassages } from "../constants";

const validateField = (
  module,
  fieldName,
  fieldValue,
  setErrors,
  pushMessage
) => {
  let result = validate[module][fieldName](fieldValue);
  let message = validationErrorMassages[module][fieldName];
  result
    ? setErrors((prevState) => ({ ...prevState, [fieldName]: false }))
    : pushMessage({ text: message }) &&
      setErrors((prevState) => ({ ...prevState, [fieldName]: true }));
  return result;
};
export default validateField;

export const validateAll = (...validators) => {
  return !validators.includes(false);
};

export const validate = {
  auth: {
    userName: (name) => name?.length > 2 && name?.length < 25,
    email: (email) => emailReg.test(email),
    password: (password) => passReg.test(password),
  },
  budget: {
    name: (name) => name?.length > 2 && name?.length < 25,
    value: (value) => +value > 0,
    currency: (currency) => currency?.length ?? 0 > 0,
  },
};
