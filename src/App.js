import React from "react";
import { useImmer } from "use-immer";
import { Box, Button, List, ListItem, UnorderedList } from "@chakra-ui/react";

let nextId = 1;
function App(props) {
  const [items, updateItems] = useImmer([]);

  function handleButtonClick(todo) {
    updateItems((draft) => {
      draft.push({ id: nextId++, done: false, text: todo });
    });
  }

  // js array element find 등을 검색
  function handleDoneButtonClick(id) {
    console.log(id);

    updateItems((draft) => {
      const target = draft.find((elem) => elem.id === id);
      target.done = true;
    });
  }

  return (
    <div>
      <Button onClick={() => handleButtonClick("자바공부")}>자바공부</Button>
      <Button onClick={() => handleButtonClick("점심먹기")}>점심먹기</Button>
      <Button onClick={() => handleButtonClick("잠자기")}>놀기</Button>

      <Box>
        <UnorderedList>
          {items.map((item) => (
            <ListItem
              key={item.id}
              textDecoration={item.done ? "line-through" : "none"}
            >
              {item.text}
              <Button onClick={() => handleDoneButtonClick(item.id)}>
                완료
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
}

export default App;
