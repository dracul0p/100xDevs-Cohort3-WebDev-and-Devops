import { useState, useEffect } from "react";
//custom hook
export function usePostTitle() {
  const [post, setPost] = useState({});

  async function getPost() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json();
    setPost(json);
  }

  useEffect(function () {
    getPost();
  }, []);
  return post.title;
}

// url as input  -->  return data whatever backend returns
export function useFetch(url) {
  const [data, setData] = useState({});
  // console.log(url);
  const [loading , setLoading] = useState(true);

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

  return { data , loading };
}
