import { useState, useEffect } from "react";

// url as input  -->  return data whatever backend returns
export function useFetch(url, retryTime) {
  const [data, setData] = useState({});
  // console.log(url);
  const [loading, setLoading] = useState(true);

  async function getData() {
    setLoading(true); //before request sending
    const response = await fetch(url);
    const json = await response.json();
    setData(json);

    setLoading(false); //after data received
  }

  useEffect(() => {
    getData();
  }, [url]);

  useEffect(() => {
    setInterval(getData, retryTime * 1000);

    //cleanup add your self for this
  }, []);

  return { data, loading };
}
