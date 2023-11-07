import React, { useEffect, useState } from "react";
import axios from "axios";

function App(props) {
  const [myState, setMyState] = useState("");

  useEffect(() => {
    //컴포넌트가 실행될때 처음 그려짐. axois요청이 날아감. 우리가 응답하는걸 안 만들어서 500코드 에러가 뜸.
    axios
      // 앞에 빠진 localhost:8080은 아까 프록시로 설정해둠
      // api/main/sub1로 요청을 했고, 거기서 "hello boot app!!"을 return했기 때문에
      // 로그창에 hello boot app라고 뜸
      //setMyState(data) 라고 써야 재렌더링 될때 myState의 내용이 바뀜
      .get("/api/main1/sub1")
      .then((response) => response.data)
      .then((data) => setMyState(data))
      .catch((error) => console.log(error));
  }, []);

  return <div>{myState}</div>;
}

export default App;
