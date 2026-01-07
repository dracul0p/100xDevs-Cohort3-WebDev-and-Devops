import { useState, useEffect } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { useFetch, usePostTitle } from "./hooks/useFetch.js";

//ciustom hooks : start with "use" keyword |  can use other hooks inside it.

function App() {
 
//  data compimg form dynamic backend 
  const [currPost, setCurrPost] = useState({});

  const { data , loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currPost);

  if(loading){
    return <div>Loading...</div>
  }


  // const postTitle = usePostTitle();
  return (
    <>

      <div>
        <button onClick={() => setCurrPost(1)}>1</button>
        <button onClick={() => setCurrPost(2)}>2</button>
        <button onClick={() => setCurrPost(3)}>3</button>
      </div>

      <h1>object data</h1>
      {JSON.stringify(data)}

      {/* <h1>Post title</h1>
      {postTitle} */}
      {/* {data.title} */}
    </>
  );
}

export default App;
