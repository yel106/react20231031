import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function App(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  console.log(username);
  console.log(email);
  function handleUseNameChange(e) {
    setUsername(e.target.value);
  }

  function handleUserEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <div>
      <Box>
        <Input type="text" value={username} onChange={handleUseNameChange} />
      </Box>
      <Box>
        <Input type="text" value={email} onChange={handleUserEmail} />
      </Box>
      <Text>
        {username}의 email은 {email} 입니다.
      </Text>

      {/* arrow function이용 */}
      <Box>
        <Input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Box>
    </div>
  );
}

export default App;
