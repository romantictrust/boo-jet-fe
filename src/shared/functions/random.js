export const randomString = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

const randomNumber = (variety = 100001) => (Math.random() * variety) | 0;
export default randomNumber;
