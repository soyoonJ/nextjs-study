// 모든 페이지가 렌더링 되기 이전에 _app.js를 먼저 확인함
import NavBar from "../components/NavBar";
// globals.css는 커스텀 app 컴포넌트에서만 import 가능
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
      {/* <span>hello</span> */}
    </>
  );
}
