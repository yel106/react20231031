import { Button, useToast } from "@chakra-ui/react";

function App() {
  const toast = useToast();

  return (
    <>
      <Button
        onClick={() =>
          toast({
            title: "저장 완료",
            description: "게시물이 저장되었습니다.",
            duration: 10000,
            position: "top-right",
            isClosable: true,
          })
        }
      >
        {" "}
        성공 토스트 띄우기{" "}
      </Button>
      <Button
        onClick={() =>
          toast({
            title: "저장 실패!",
            description: "게시물이 저장되지 않았습니다.",
            duration: 10000,
            position: "top-right",
            isClosable: true,
            status: "error",
          })
        }
      >
        {" "}
        실패 토스트 띄우기{" "}
      </Button>
    </>
  );
}

export default App;
