import React, { useState } from "react";
import { Input, Text } from "@chakra-ui/react";
import { useImmer } from "use-immer";

function App(props) {
  const [person, setPerson] = useState({ name: "son", city: "seoul" });
  const [user, updateUser] = useImmer({ name: "lee", city: "jeju" });

  function handleNameChange(e) {
    const nextPerson = { ...person };
    nextPerson.name = e.target.value;

    setPerson(nextPerson);
  }

  function handleCityChange(e) {
    const nextPerson = { ...person };
    nextPerson.city = e.target.value;

    setPerson(nextPerson);
  }

  function handleUserNameChange(e) {
    updateUser((draft) => {
      //중괄호로 묶어야 리턴을 하지 않음
      draft.name = e.target.value;
    }); //값이 아니라 함수를 집어넣어야함
  }

  function handleUserCityChange(e) {
    updateUser((draft) => {
      draft.city = e.target.value;
    });
  }

  return (
    <div>
      <Input value={person.name} onChange={handleNameChange} />
      <Input value={person.city} onChange={handleCityChange} />
      <Text>
        {person.name}은 {person.city}에 삽니다.
      </Text>

      <hr />

      <Input value={user.name} onChange={handleUserNameChange}></Input>
      <Input value={user.city} onChange={handleUserCityChange}></Input>
      <Text>
        {user.name}은 {user.city}에 삽니다.
      </Text>
    </div>
  );
}

export default App;
