import React, { useEffect, useState } from "react";
import axios from "axios";

function App(props) {
  const [message, setMessage] = useState("");

  //useEffect로
  // get 요청 /api/main1/sub2
  // 받은 값으로 message state 업데이트 하는 코드 작성하기

  useEffect(() => {
    axios
      .get("/api/main1/sub2")
      .then((response) => response.data)
      .then((data) => setMessage(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
