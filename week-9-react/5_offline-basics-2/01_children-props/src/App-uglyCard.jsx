// The children prop allows you to pass elements or components as props to other components.

function App() {
  return (
    <div style={{ display: "flex", background: "grey" }}>
      <Card>
        <div>good will</div>
      </Card>

      {/* <Card
        innerContent={
          <div style={{ color: "green" }}>
            gand maray sab . survive until you are the hunter. <br /> <br />
            <input type="text" />
          </div>
        }
      /> */}

      {/* hard to read   make it easy */}

      <Card>
        <div style={{ color: "green" }}>
          gand maray sab . survive until you are the hunter. <br /> <br />
          <input type="text" />
        </div>
      </Card>
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 10,
        color: "black",
        padding: 10,
        margin: 10,
      }}
    >
      upper topbar
      {children}
      lower bottom bar
      {/* {children} */}
    </div>
  );
}

export default App;
