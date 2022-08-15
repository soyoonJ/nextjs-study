// pages 폴더 안에 있는 다른 파일과 달리,
// index.js는 예외적으로 홈으로 연결시켜줌.
// => localhost:3000/
// /index로 들어가면 404 뜸

// import react 안해도 일반 태그만 사용할 경우 페이지 내용 렌더링 됨.
// useState 같은 훅 사용하려면 import 해와야 하긴 함
// import {useState} from 'react';
// import NavBar from "../components/NavBar";

export default function Home() {
  // const [counter, setCounter] = useState(0)
  return (
    <div>
      {/* <NavBar /> */}
      <h1>Hello</h1>
      {/* <h1>Hello {counter}</h1> */}
      {/* <button onClick={()=> setCounter(prev=>prev+1)}>counter+</button> */}
      {/* <style jsx global>{`
        a {
          color: white;
        }
      `}</style> */}
    </div>
  );
}
