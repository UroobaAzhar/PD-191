import { useEffect } from "react";
import axios from "axios";
import authFetch from "../../custom";

// remember this "https://www.course-api.com/react-store-products"; is the full url, the base
// is already in the custom.js

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    // console.log("custom axios instance");
    // console.log(
    //   "%cStyled %cLog %cMessage",
    //   "color: white; font-weight: bold; background-color: red",
    //   "color: green; background-color: pink",
    //   "color: blue;"
    // );

    try {
      const responseOne = await authFetch("/react-store-products");
      const responseTwo = await axios(randomUserUrl);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
