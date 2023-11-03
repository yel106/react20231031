import { Box } from "@chakra-ui/react";

function App() {
  function handleClick(e) {
    // a 태그 클릭시 naver로 이동하도록 하기
    e.preventDefault();

    /*  location: js에서 URL 정보를 가져오는 객체임 */
    /* lacation.href, location.protocol, location.host 등이 있음
     * location.href는 프로퍼티 값이 변경되는 경우 새로운 페이지로 이동함.*/
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
