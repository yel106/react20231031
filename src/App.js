import MyBox, { person, team } from "./component/MyContainer";
function App() {
  return (
    <div>
      <MyBox />
      <h1>{person.name}</h1>
      <h1>{person.address}</h1>
      <h1>{person.title}</h1>
      <h1>{person.score}</h1>
    </div>
  );
}

export default App;
