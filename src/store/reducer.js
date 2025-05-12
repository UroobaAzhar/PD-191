// Simple counter:

// const initialState = {
//   count: 0,
// };

// export const countReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TEN":
//       return {
//         ...state,
//         count: state.count + 10,
//       };
//     case "SUBTRACT_TEN":
//       return {
//         ...state,
//         count: state.count - action.payload,
//       };
//     default:
//       return state;
//   }
// };

// --------------ecommerce below-------------

const initialState = {
  products: [
    { name: "Apple", price: 10 },
    { name: "Mango", price: 15 },
    { name: "Orange", price: 20 },
    { name: "Grapes", price: 30 },
  ],
  cart: [],
  total: 0,
};

// reducers

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PURCHASE":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
      };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter(
          (item, index) => index !== action.payload.index
        ),
        total: state.total - action.payload.price,
      };
    default:
      return state;
  }
};

export default cartReducer;
