import { Box } from "@chakra-ui/react";

function App() {
  function handleClick(e) {
    // a 태그 클릭시 naver로 이동하도록 하기
    e.preventDefault();
    window.location.href = "https://www.naver.com";
  }

  return (
    <>
      <a href="https://www.daum.net" onClick={handleClick}>
        다음으로 이동
      </a>
    </>
  );
}
export default App;
