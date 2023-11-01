import MyBox, { address } from "./component/MyBox"; /*named export*/
import MyElem, {
  address as myAddress,
} from "./component/MyElem"; /*default export*/

//as로 named import 값을 import할 때 별칭을 줄 수 있음

function App() {
  return (
    <>
      <h1>{address}</h1>
      <h1>{myAddress}</h1>
      <MyElem />
      <MyBox />
    </>
  );
}
export default App;
