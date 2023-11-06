import React, { useState } from "react";
import { Input, List, ListItem, Button } from "@chakra-ui/react";

function App(props) {
  const [coffees, setCoffees] = useState(["라떼"]); //배열 객체 들어있음
  const [text, setText] = useState("");

  function handleButtonClick() {
    // 직전 상태 배열을 조작하면 안되고
    // coffees.push(text);
    // setCoffees(coffees); // 객체인 배열이 들어있어서 같은 객체라서 참조값이 같으니까 setCoffees해도 안 바뀜
    // console.log(coffees);

    // 새 배열을 만들어서 set state 해야 함
    const newCoffees = [...coffees];
    newCoffees.push(text);
    setCoffees(newCoffees); // 객체인 배열이 들어있어서 같은 객체라서 참조값이 같으니까 setCoffees해도 안 바뀜
  }

  return (
    <div>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={handleButtonClick}>추가</Button>

      <List>
        {coffees.map((c, index) => (
          <ListItem key={index}>{c}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
