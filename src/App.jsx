import { useSelector, useDispatch } from "react-redux";
import "./App.css";
// just for the simple counter
// import { ADD, SUBTRACT } from "./store/action";
// simple counter above
// --------------ecommerce below without RTK------------
// import { ADDTOCART, REMOVE } from "./store/action";
//
// --------------ecommerce below with RTK------------

// Simply Counter example:
// function App() {
//   const countData = useSelector((state) => state.countReducer.count);
//   const dispatch = useDispatch();
//   return (
//     <>
//       <h1>Count with Redux</h1>
//       <p>{countData}</p>
//       <button onClick={() => dispatch(ADD())}>Add 10</button>
//       <button onClick={() => dispatch(SUBTRACT())}>Subtract 10</button>
//     </>
//   );
// }

// export default App;

// This is where we added the ecommerce store without the RTK:

// function App() {
//   const products = useSelector((state) => state.products);
//   const cart = useSelector((state) => state.cart);
//   const total = useSelector((state) => state.total);

//   const dispatch = useDispatch();

//   const purchaseHandler = (e) => {
//     let name = e.target.options[e.target.selectedIndex].text;
//     // console.log(e.target.selectedIndex);
//     // console.log(e.target) this is the select element
//     let price = parseInt(e.target.value);
//     let itemObj = { name, price };
//     console.log(itemObj);
//     dispatch(ADDTOCART(itemObj));
//   };

//   const handleDel = (index, price) => {
//     dispatch(REMOVE({ index, price }));
//   };
//   return (
//     <>
//       <h1>Products</h1>
//       <select onChange={(e) => purchaseHandler(e)}>
//         {products.map((product, index) => {
//           return (
//             <option value={product.price} key={index}>
//               {product.name}: {product.price}
//             </option>
//           );
//         })}
//       </select>
//       <hr />
//       <h1>Cart</h1>
//       {cart.map((item, index) => {
//         return (
//           // <li key={index}>
//           //   {item.name} and
//           //   {item.price}
//           // </li>
//           <li key={index}>
//             {item.name} <span> </span>
//             <button onClick={() => handleDel(index, item.price)}>delete</button>
//           </li>
//         );
//       })}
//       <hr />
//       <h1>Total</h1>
//       <p>{total}</p>
//       <hr />
//     </>
//   );
// }

// export default App;

// this is the store with RTK:
import { addToCart, removeFromCart } from "./storetwo/cartSlice/cartSlice";
import {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} from "./storetwo/productsApi";
import { useState } from "react";
// importing for axios
import Setup from "./axios/examples/Interceptors";
import Users from "./Users";
// import axios global settings
// only use this import for GLobalInstance file
// import "./global";

const App = () => {
  // useState is for the single search product
  const [input, setInput] = useState();
  const { products, cart, total } = useSelector((state) => state.cart);
  const { data, error, isLoading } = useGetAllProductsQuery();
  // empty string will show all products
  // const { data: singleProduct } = useGetSingleProductQuery(input || "");
  const { data: singleProduct } = useGetSingleProductQuery(input);
  const dispatch = useDispatch();

  const purchaseHandler = (e) => {
    let name = e.target.options[e.target.selectedIndex].text;
    let price = parseInt(e.target.value);
    let itemObj = { name, price };
    dispatch(addToCart(itemObj));
  };

  const handleDel = (index, price) => {
    dispatch(removeFromCart({ index, price }));
  };

  return (
    <>
      <h1>PRODUCTS</h1>
      <select onChange={(e) => purchaseHandler(e)}>
        {products.map((product, index) => {
          return (
            <option value={product.price} key={index}>
              {product.name}: {product.price}
            </option>
          );
        })}
      </select>
      <hr />
      <h1>CART</h1>

      {cart.map((item, index) => {
        return (
          <li key={index}>
            {item.name} <span> </span>
            <button onClick={() => handleDel(index, item.price)}>delete</button>
          </li>
        );
      })}
      <hr />
      <h1>TOTAL</h1>
      <p>{total}</p>
      <hr />
      <h1>API PRODUCTS</h1>
      {data &&
        data.products.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      <hr />
      <h1>SEARCH PRODUCT</h1>
      <input
        type="text"
        placeholder="laptop, phone etc"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      {singleProduct &&
        singleProduct.products.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      <hr />
      <h1>AXIOS BELOW</h1>
      <Setup />
      <hr />
      <h1>USERS QUERY DATA BELOW</h1>
      <Users />
    </>
  );
};

export default App;
