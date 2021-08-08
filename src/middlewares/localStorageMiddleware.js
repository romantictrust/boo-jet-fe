import { USER_SIGN_IN } from "../pages/AuthPage/actions";

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    try {
      const result = next(action);
      if ([USER_SIGN_IN.SUCCESS].includes(result.type)) {
        localStorage.setItem("user", JSON.stringify(result.payload.user));
      }
      return result;
    } catch (e) {
      console.error(e);
    }
  };
};
export default localStorageMiddleware;
