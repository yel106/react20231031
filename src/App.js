function App() {
  return (
    <div>
      <MyComponent1 />
      <MyComponent1 />
      <MyComponent1 />
      {/*
          <img src="https://i.imgur.com/LkAyqxJ.jpeg" />
          <img src="https://i.imgur.com/LkAyqxJ.jpeg" />
          <img src="https://i.imgur.com/LkAyqxJ.jpeg" />
        */}
    </div>
  );
}

function MyComponent1() {
  return (
    <div style={{ width: "100%" }}>
      <img
        style={{ width: "100%" }}
        src="https://i.imgur.com/LkAyqxJ.jpeg"
        alt="너굴"
      />
      ;
    </div>
  );
}

export default App;
