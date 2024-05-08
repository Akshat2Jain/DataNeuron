import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";

export default async function useGetCount() {
  const [count, setCount] = useState([]);

  async function getCount() {
    try {
      const c = await axios.get("http://localhost:8080/component/getCount");
      setCount(c.data);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  }
  useEffect(() => {
    getCount();
  }, []);

  return count;
}
