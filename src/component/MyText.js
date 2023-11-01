import style from "../style/mystyle.module.css";

export function MyText() {
  return (
    <>
      <div>
        {/* red 배경색, white 글자색 */}
        {/* src/style/mystyle.module.css 파일 생성 */}
        {/* MyText.js에서 mystyle.module.css import 하기 */}
        <h1 className={`${style.error} ${style.special} ${style.coffee}`}>
          Lorem ipsum dolor sit amet.
        </h1>
        <h1 className={[style.error, style.special, style.coffee].join(" ")}>
          Lorem ipsum dolor sit amet.
        </h1>
      </div>
    </>
  );
}
