import { emailReg, passRef } from "../constants";

export function validateEmail(email) {
  return emailReg.test(email);
}

export function validatePassword(password) {
  return passRef.test(password);
}
