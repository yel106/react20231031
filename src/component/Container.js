export default function Container({ style }) {
  /*default export는 함수 이름 안써도 되지만 그래도 쓰는게 좋음*/
  return (
    <div style={style}>
      <p>react</p>
    </div>
  );
}

export const color = "red";
