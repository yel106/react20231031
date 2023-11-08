import React, { useEffect, useState } from "react";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";

function App(props) {
  const [employeeId, setEmployeeId] = useState(0);
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true); //처음에는 로딩중. 로딩중 일때만 추가로 무언가를 할수 있다는 뜻
    axios
      .get("/api/main1/sub5?id=" + employeeId)
      .then((response) => response.data)
      .then((data) => setEmployee(data))
      .catch((error) => setEmployee(null))
      .finally(() => setIsLoading(false));
  }, [employeeId]);

  // return 안에 쓰지 않고, 밖에 쓸 수도 있음
  let textContent = null;
  if (isLoading) {
    textContent = <Spinner />;
  } else {
    if (employee === null) {
      textContent = <Text>다른 직원 번호를 선택해주세요</Text>;
    } else {
      textContent = <Text> {employee.lastName}</Text>;
    }
  }

  return (
    //직원 번호를 선택하면 직원의 이름이 출력되도록
    // /api/main1/sub5?id=5
    // spring boot의 메소드도 작성하기, Mapper도
    <div>
      <Select onChange={(e) => setEmployeeId(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </Select>

      <Box>
        {isLoading && <Spinner />}
        {isLoading || (
          <>
            {employee === null ? (
              <Text>조회한 고객이 없습니다. 다른 번호를 선택해주세요.</Text>
            ) : (
              <Text>{employee.firstName}</Text>
            )}
          </>
        )}
      </Box>

      <Box>{textContent}</Box>
    </div>
  );
}

export default App;
