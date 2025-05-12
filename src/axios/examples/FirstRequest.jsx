import { useEffect } from "react";
import axios from "axios";
// limit, if 429 wait for 15 min and try again
const url = "https://www.course-api.com/react-store-products";

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      // just axios is also get req by default:
      //   const response = await axios.get(url);
      const response = await axios(url);
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">first request</h2>;
};
export default FirstRequest;
