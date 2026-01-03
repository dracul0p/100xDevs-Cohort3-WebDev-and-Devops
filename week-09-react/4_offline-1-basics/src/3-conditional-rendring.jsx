// what  react do ?
//structure your app into components
// defining a state of your application

// component  : building block of ui ,
// allow ui tos split into independent reusable piece

import { useState } from "react";
function App() {
  return (
    <div
      style={{
        //
        background: "#dfe6e9",
        height: "100vh",
      }}
    >
      <ToggleMessage />

      {/* hi there asheesh */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <br />
            <PostComponet
              name={"Bharat"}
              subtitle={"14 followers"}
              time={"2m ago"}
              image={
                "https://imgs.search.brave.com/F5OoHgfmJlOgbB00VWzyvvcxuQZk7JOPrCYV51JMmNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/Mzc5NDUyL3Bob3Rv/L2tpdHR5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz13UWcw/TXdTcXJxZkkzWHdN/WGREVjhkY2RZMlNH/WVh2YndPdE12cUxX/UWpJPQ"
              }
              description={
                "What to know how to win big? Check out how these folks won $6000 in bounties."
              }
            />
          </div>
          <br />
          <div>
            <PostComponet
              name="asheesh"
              subtitle={"promoted"}
              image={
                "https://media.licdn.com/dms/image/v2/C5603AQG5cBkkzO7TDQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1633333024447?e=1767225600&v=beta&t=4yCz5KRe5fSqC9Os8TgSdxuLMEKFu15R7aR06Tsze9E"
              }
              description={
                "Want to know how to win big? Check out how these folks won $6000 in bounties."
              }
            />
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false); // defining state varible

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  );
};

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "grey",
  borderWidth: 1,
  padding: 20,
};

function PostComponet({ name, subtitle, time, image, description }) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img src={image} style={{ width: 30, height: 30, borderRadius: 20 }} />

        <div style={{ fontSize: 10, marginLeft: 20 }}>
          <b>{name}</b>

          <div>{subtitle} </div>

          {/* conditional rendring */}
          {/*  
          {time !== undefined ? (
            <div style={{ display: "flex" }}>
              <div>{time}</div>
              <img
                src="https://imgs.search.brave.com/HR4XL7q_XpiQSqNwAl17jYkdNBrGw-fKdXxJlCr-uls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/MDc3ODM3Ni9waG90/by9jbG9jay02LW9j/bG9jay5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VTZKUXI5/UFdPYmVuY2lOMHVj/QkgycXJFeWd5WlY4/VUdDem1UQ1pVRnVE/cz0"
                style={{ width: 15, height: 15 }}
              />
            </div>
          ) : null}
          */}

          {time != undefined && (
            <div style={{ display: "flex" }}>
              <div>{time}</div>
              <img
                src="https://imgs.search.brave.com/HR4XL7q_XpiQSqNwAl17jYkdNBrGw-fKdXxJlCr-uls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/MDc3ODM3Ni9waG90/by9jbG9jay02LW9j/bG9jay5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VTZKUXI5/UFdPYmVuY2lOMHVj/QkgycXJFeWd5WlY4/VUdDem1UQ1pVRnVE/cz0"
                style={{ width: 25, height: 15 }}
              />
            </div>
          )}
        </div>
      </div>

      <div style={{ fontSize: 14 }}>{description}</div>
    </div>
  );
}

function ProfileCard() {
  return;
}

export default App;
