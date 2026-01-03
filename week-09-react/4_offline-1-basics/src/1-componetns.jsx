// what  react do ?
//structure your app into components
// defining a state of your application

// component  : building block of ui ,
// allow ui tos split into independent reusable piece

function App() {
  return (
    <div
      style={{
        //
        background: "#dfe6e9",
        height: "100vh",
      }}
    >
      {/* hi there asheesh */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <PostComponet />
          </div>
          <div>
            <PostComponet />
          </div>
          <div>
            <PostComponet />
          </div>
          <div>
            <PostComponet />
          </div>
        </div>
      </div>
    </div>
  );
}

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "grey",
  borderWidth: 1,
  padding: 20,
};

function PostComponet() {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src="https://media.licdn.com/dms/image/v2/C5603AQG5cBkkzO7TDQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1633333024447?e=1767225600&v=beta&t=4yCz5KRe5fSqC9Os8TgSdxuLMEKFu15R7aR06Tsze9E"
          style={{ width: 30, height: 30, borderRadius: 20 }}
        />

        <div style={{ fontSize: 10, marginLeft: 20 }}>
          <b>100Xdevs</b>
          <div> 23777 followers</div>
          <div>12m</div>
        </div>
      </div>

      <div style={{ fontSize: 12 }}>
        Want to know how to win big? Check out how these folks won $6000 in
        bounties.
      </div>
    </div>
  );
}

function ProfileCard() {
  return;
}

export default App;
