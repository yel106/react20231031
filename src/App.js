import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

function App(props) {
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setMessage(e.target.value);
  }
  return (
    <div>
      {/* value랑 onChage는 둘 다 같이 쓰는게 나음 */}
      <Input type="text" value={message} onChange={handleChange} />
    </div>
  );
}

export default App;
