// 모든 페이지가 렌더링 되기 이전에 _app.js를 먼저 확인함
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
// globals.css는 커스텀 app 컴포넌트에서만 import 가능
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    // _app.js가 너무 커지는 것을 방지하기 위해 Layout이라는 컴포넌트를 만들어 따로 빼줌
    <Layout>
      {/* <NavBar /> */}
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
      {/* <span>hello</span> */}
    </Layout>
  );
}
