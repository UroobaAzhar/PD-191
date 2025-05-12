import { useEffect } from "react";
import axios from "axios";

// the axios above will already have the accept headers because we set them in global.js and imported in
// app. just by importing it is already changing the axios global settings.
// if I comment out the import it then shows this in the Networks tab of browser:
//  Accept | application/json, text/plain, */*

const productsUrl = "https://www.course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api/";

const GlobalInstance = () => {
  const fetchData = async () => {
    // console.log("global axios instance");
    const response = await axios(productsUrl);
    const responseTwo = await axios(randomUserUrl);
    console.log(response);
    console.log(responseTwo);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">global instance</h2>;
};
export default GlobalInstance;
