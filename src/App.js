import {
  country,
  MyContent,
  MyElem,
  MyNavBar,
  text,
  value,
} from "./component/MyElem";

function App() {
  //country, text, value, MyElem, MyNavBar, MyCOntent
  // 를 하나의 파일(component/MyElem.js)에 작성하고 export하기
  return (
    <div>
      <p>{country}</p>
      <p>{text}</p>
      <p>{value}</p>
      <MyElem />
      <MyNavBar />
      <MyContent />
    </div>
  );
}

export default App;
