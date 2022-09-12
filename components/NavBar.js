// // anchor tag를 바로 쓰지 않고, Link를 사용해야 함
// import Link from "next/link";
// // 추가로 설치한 것이 아닌, nextjs에 이미 설치되어 있는 것
// import { useRouter } from "next/router";
// import styles from "./NavBar.module.css";

// ⭐ module을 사용하여 style 주는 방법

// export default function NavBar() {
//   const router = useRouter();
//   return (
//     // module을 사용하고 있기 때문에 className="nav" 하면 적용 안됨
//     // <nav className={styles.nav}>
//     <nav>
//       {/* <a href="/">Home</a>
//       <a href="/about">About</a> */}
//       <Link href="/">
//         {/* a 없이 Link만 넣어도 되지만,
//         Link에 className이나 style 등을 넣을 수 없기 때문에
//         nextjs에서는 a를 같이 사용 */}
//         {/* <a
//           style={{ color: router.pathname === "/" ? "red" : "blue" }}
//           className="hello"
//         > */}
//         <a
//           className={`${styles.link} ${
//             router.pathname === "/" ? styles.active : ""
//           }`}
//         >
//           Home
//         </a>
//       </Link>
//       <Link href="/about">
//         {/* <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}> */}
//         {/* <a className={router.pathname === "/about" ? styles.active : ""}> */}
//         <a
//           className={[
//             styles.link,
//             router.pathname === "/about" ? styles.active : "",
//           ].join(" ")}
//         >
//           About
//         </a>
//       </Link>
//     </nav>
//   );
// }

// ⭐ styled jsx를 활용하여 style 주는 방법
// styled jsx는 nextjs에서만 활용할 수 있는 방법
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      {/* ../public~~~ 경로를 쓰지 않고, 바로 public에 있는 이미지를 / 해서 사용가능 */}
      <img src="/vercel.svg" />
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        .active {
          color: yellow;
          //   color: $ { props.color }
        }
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
}
