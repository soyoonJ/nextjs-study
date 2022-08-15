// next.js에서는 pages 폴더 안에 export default로 시작하는 파일을 생성할 경우,
// 파일명 url로 들어갔을 때 return 뒤에 나오는 내용이 노출된다.
// react에서는 router를 다운 받아 설정을 해주었지만 next.js에서는 손쉽게 가능!!

import NavBar from "../components/NavBar";

// 정확한 url로 들어가지 않았을 경우 404 페이지도 제공

export default function Potato() {
  return (
    <div>
      <NavBar />
      <h1>About</h1>
    </div>
  );
}
