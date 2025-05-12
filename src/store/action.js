// simple counter

// export const ADD = () => {
//   return {
//     type: "ADD_TEN",
//     payload: 0,
//   };
// };

// export const SUBTRACT = () => {
//   return {
//     type: "SUBTRACT_TEN",
//     payload: 10,
//   };
// };

// -------- ecommerce store -------------

export const ADDTOCART = (item) => {
  return {
    type: "PURCHASE",
    payload: item,
  };
};

export const REMOVE = ({ index, price }) => {
  return {
    type: "REMOVE",
    payload: { index, price },
  };
};
