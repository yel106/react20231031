import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg={"gold"} border={"1px solid purple"}>
        Lorem ipsum.
      </Box>
      <Box bg={"blue"} borderTop={"2px dotted green"}>
        Quaerat, recusandae?
      </Box>
      <Box bg={"pink"} borderBottom={"7px double yellow"}>
        Odio, quibusdam.
      </Box>
      <Box borderX={"10px solid"} borderColor={"gray.600"}>
        Facere, omnis!
      </Box>
      <Box borderY={"10px dotted"} borderColor={"red.300"}>
        Dicta, iusto!
      </Box>
      <Box border={"3px solid blue"} borderRadius={"20px"}>
        Iure, ut!
      </Box>
      <Box border={"5px solid pink"} borderRadius={"20%"}>
        Animi, vero.
      </Box>
      <Box border={"5px solid green"} borderRadius={8}>
        Illum, rerum.
      </Box>
      <Box border={"5px solid blue"} borderTopRightRadius={"10"}>
        Deserunt, non?
      </Box>
      <Box>Dicta, eveniet?</Box>
      <Box border={"5px solid skyblue"} borderTopEndRadius={"10"}>
        Aspernatur, repellat?
      </Box>
      <Box border={"5px solid purple"} borderBottomLeftRadius={"20"}>
        Assumenda, iste?
      </Box>
      <Box border={"5px solid black"} borderTopRightRadius={"30"}>
        Facere, ut!
      </Box>
      <Box shadow={"10px 5px 5px red"}>Odio, sed.</Box>
      <Box shadow={"lg"}>Aperiam, sapiente.</Box>
      <Box shadow={"xl"}>Architecto, eaque!</Box>
      <Box shadow={"outline"}>Magnam, numquam?</Box>
      <Box shadow={"md"}>Dignissimos, porro.</Box>
      <Box bg={"blue.300"} m={"20px"}>
        Quae, sint!
      </Box>
      <Box bg={"yellow.600"} m={"50px"}>
        Animi, quia.
      </Box>
      <Box bg={"facebook.500"} mx={"70px"}>
        Quae, sint!
      </Box>
      <Box bg={"pink.300"} my={"70px"}>
        Magnam, numquam?
      </Box>

      {/*Box[bg][m]*5>lorem2*/}
      <Box bg="red.600" m="1">
        Lorem ipsum.
      </Box>
      <Box bg="blue.300" m="2">
        Id, porro?
      </Box>
      <Box bg="pink" m="3">
        Illum, ipsa.
      </Box>
      <Box bg="yellow.100" m="4">
        Ab, suscipit.
      </Box>
      <Box bg="gold" m="5">
        Qui, sequi.
      </Box>

      {/*Box[bg]*10>lorem2*/}
      <Box bg="gray.400" m={"5"}>
        Lorem ipsum.
      </Box>
      <Box bg="red.400" m={"4"}>
        Dignissimos, eius.
      </Box>
      <Box bg="gray.200" px={"30px"}>
        Est, vero.
      </Box>
      <Box bg="red" p={"20px"}>
        Illum, voluptatem!
      </Box>
      <Box bg="purple" py={1}>
        Dolorum, quam?
      </Box>
      <Box bg="gray.300" pt={"20px"}>
        Delectus, tempore.
      </Box>
      <Box bg="beige" pl={"20px"}>
        Cumque, maiores.
      </Box>
      <Box bg="blue" pb={"50px"}>
        Cum, esse?
      </Box>
      <Box bg="red" pr={"30px"}>
        Ex, placeat?
      </Box>
      <Box bg="skyblue">Nobis, quas.</Box>

      <div
        style={{
          margin: "10px",
          backgroundColor: "gold",
        }}
      >
        {" "}
        Lorem ipsum.
      </div>
    </>
  );
}
export default App;
