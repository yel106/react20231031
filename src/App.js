import {
  MyBox,
  MyContainer,
  MyElem,
  name,
  address,
  person,
} from "./component/MyBox";

function App() {
  console.log("name", name);
  console.log("address", address);
  console.log("person", person);
  return (
    <>
      <MyBox />
      <MyElem />
      <MyContainer />
    </>
  );
}
export function MyElem() {
  return (
    <div>
      <h1></h1>
    </div>
  );
}
