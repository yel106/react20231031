import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

function App() {
  return (
    <>
      <SimpleGrid spacing={"10px"} columns={{ base: 2, md: 3, "2xl": 6 }}>
        {" "}
        {/*작을때 2개컬럼으로 보이고, 커지면 3개로 보이게*/}
        {/*
         base: "0em", // 0px
          sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
        {/*Box[bg="blue.300"]*30>lorem1*/}
        <Box bg="blue.300">Lorem.</Box>
        <Box bg="blue.300">Iusto.</Box>
        <Box bg="blue.300">Possimus!</Box>
        <Box bg="blue.300">Beatae.</Box>
        <Box bg="blue.800">Earum.</Box>
        <Box bg="blue.300">Saepe?</Box>
        <Box bg="blue.300">Provident.</Box>
        <Box bg="blue.300">Harum!</Box>
        <Box bg="blue.300">Recusandae.</Box>
        <Box bg="blue.300">Harum.</Box>
        <Box bg="blue.300">Animi!</Box>
        <Box bg="blue.300">Reiciendis?</Box>
        <Box bg="blue.300">Quisquam?</Box>
        <Box bg="blue.300">Eius!</Box>
        <Box bg="blue.300">Esse.</Box>
        <Box bg="blue.300">Saepe!</Box>
        <Box bg="blue.300">Ducimus.</Box>
        <Box bg="blue.300">Rerum!</Box>
        <Box bg="blue.300">Officia.</Box>
        <Box bg="blue.300">Eaque!</Box>
        <Box bg="blue.300">Tenetur.</Box>
        <Box bg="blue.300">Ipsum.</Box>
        <Box bg="blue.300">Eaque.</Box>
        <Box bg="blue.300">A.</Box>
        <Box bg="blue.300">Voluptatum!</Box>
        <Box bg="blue.300">Temporibus.</Box>
        <Box bg="blue.300">Culpa.</Box>
        <Box bg="blue.300">Odio?</Box>
        <Box bg="blue.300">Reprehenderit.</Box>
        <Box bg="blue.300">Delectus!</Box>
      </SimpleGrid>
    </>
  );
}
export default App;
