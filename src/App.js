
function App() {
  return (
    <div>
      <MyComponent1 />
      {/*
      <div>
        <h1>Hello Component</h1>
      </div>
      */}
      <MyComponent2 />
      {/*
        <p>lorem ipsum alkdjf alkdjf </p>
        <ul>
          <li>lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
        </ul>
       */}
    </div>
  );
}

function MyComponent1() {
  return (
      <>
      <h1>Hello Component</h1>
      </>
  )
}

function MyComponent2() {
  return (
      <>
        <p>lorem ipsum alswjf alswjf</p>
        <ul>
          <li>lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
        </ul>
      </>
  )
}
export default App;
