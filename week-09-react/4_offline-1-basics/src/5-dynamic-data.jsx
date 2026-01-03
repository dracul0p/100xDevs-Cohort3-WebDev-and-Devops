// what  react do ?
//structure your app into components
// defining a state of your application

// component  : building block of ui ,
// allow ui tos split into independent reusable piece
import { useState } from "react";
import { PostComponet } from "./5-post";

function App() {
  const [posts, setPosts] = useState([]);

  // const posts = [
  //   {
  //     name: "ashish",
  //     subtitle: "850 followers",
  //     image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  //     description:
  //       "Learn how consistent practice and smart strategies can grow your skills fast.",
  //   },
  // ];

  const postComponents = posts.map((post) => (
    <PostComponet
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      image={post.image}
      description={post.description}
    />
  ));

  function addPost() {
    setPosts([
      ...posts,
      {
        name: "ashish",
        subtitle: "850 followers",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        description:
          "Learn how consistent practice and smart strategies can grow your skills fast.",
      },
    ]);

    //wrong not rerendered :changes will not update
    // posts.push({
    //   name: "neha",
    //   subtitle: "2k followers",
    //   image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    //   description:
    //     "Helping beginners understand coding with simple, real-world examples.",
    // });
  }

  return (
    <div
      style={{
        background: "#dfe6e9",
        height: "100vh",
      }}
    >
      <button onClick={addPost}>Add Post</button>

      {/* hi there asheesh */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>{postComponents}</div>
      </div>
    </div>
  );
}

const ToggleMessage1 = () => {
  const [isVisible, setIsVisible] = useState(false); // defining state varible

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  );
};

const ToggleMessage = () => {
  const [notificationCount, setnotificationCount] = useState(0); // defining state varible

  function toggle() {
    setnotificationCount(notificationCount + 1);
  }

  return (
    <div>
      <button onClick={toggle}>increase count</button>
      {notificationCount}
    </div>
  );
};

function ProfileCard() {
  return;
}

export default App;
