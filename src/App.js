import { Button } from "@chakra-ui/react";
import { ArrowRightIcon, EmailIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Button colorScheme="teal">lorem.</Button>
      <Button colorScheme="facebook">Lorem.</Button>
      <Button colorScheme="blue">Aliquid?</Button>
      <Button colorScheme="orange">Sit.</Button>
      <Button colorScheme="pink">Esse!</Button>
      <Button colorScheme="red" size={"sm"}>
        Quis!
      </Button>
      <Button colorScheme="cyan" size={"lg"} variant={"outline"}>
        Deleniti.
      </Button>
      <Button colorScheme="cyan" variant="ghost">
        Laborum.
      </Button>
      <Button variant={"link"}>Consequuntur.</Button>
      <Button leftIcon={<EmailIcon />}>Et?</Button>
      <Button rightIcon={<ArrowRightIcon />}>Ipsam?</Button>
      <Button isLoading loadingText={"전송 중"}>
        A.
      </Button>{" "}
      {/*로딩 중일 땐 클릭이 안되게*/}
      <Button isLoading>Commodi!</Button>
      <Button>Repellat!</Button>
      <Button>Quidem.</Button>
      <Button>Incidunt.</Button>
      <Button>Distinctio!</Button>
      <Button>Aperiam.</Button>
      <Button>Nesciunt!</Button>
      <Button>Cumque.</Button>
      <Button>Tempora.</Button>
      <Button>Tenetur?</Button>
      <Button>Vel!</Button>
      <Button>Cumque.</Button>
      <Button>Ducimus.</Button>
      <Button>Mollitia?</Button>
      <Button>Placeat?</Button>
      <Button>Consectetur?</Button>
      <Button>Magnam!</Button>
      <Button>Necessitatibus.</Button>
      <Button>Accusamus?</Button>
    </>
  );
}

export default App;
