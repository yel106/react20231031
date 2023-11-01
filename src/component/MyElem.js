function MyElem() {
  return null;
}

function MyNavBar() {
  return null;
}
function MyContent() {
  return null;
}

export { MyElem, MyNavBar, MyContent };

let country = "USA";
const text = "미국";
const value = "재밌는 곳";

//선언하면서 바로 export해도 되고,  선언 따로 export 따로 해도 됨.
export { country, text };
export { value };
