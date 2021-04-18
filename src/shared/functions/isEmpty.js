// Object
export const objIsEmpty = (obj) =>
  obj && Object.keys(obj).length === 0 && obj.constructor === Object;
