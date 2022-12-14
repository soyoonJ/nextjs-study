// pages 폴더 안에 있는 다른 파일과 달리,
// index.js는 예외적으로 홈으로 연결시켜줌.
// => localhost:3000/
// /index로 들어가면 404 뜸

// import react 안해도 일반 태그만 사용할 경우 페이지 내용 렌더링 됨.
// useState 같은 훅 사용하려면 import 해와야 하긴 함
// import {useState} from 'react';
// import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import Link from "next/link";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    // router.push(`/movies/${id}`);
    // router.push(
    //   {
    //     pathname: `/movies/${id}`,
    //     // query 입력하면 url 뒤에 ?title="potatos" 붙음
    //     query: {
    //       title,
    //     },
    //   },
    //   // as 역할을 하는 위치. 이 url 추가하면 쿼리 안보임
    //   // 근데 router로 전달 가능 => 사용자에게 숨기면서 활용은 가능한 상태
    //   `/movies/${id}`
    // );
    router.push(`/movies/${title}/${id}`);
  };
  // const [counter, setCounter] = useState(0)
  // const [movies, setMovies] = useState();
  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (await fetch("/api/movies")).json();
  //     // console.log(results);
  //     setMovies(results);
  //   })();
  // }, []);
  return (
    <div>
      {/* <NavBar /> */}
      {/* <h1>Hello</h1> */}
      {/* <h1>Hello {counter}</h1> */}
      {/* <button onClick={()=> setCounter(prev=>prev+1)}>counter+</button> */}
      {/* <style jsx global>{`
        a {
          color: white;
        }
      `}</style> */}
      <Seo title="Home" />
      {/* {!movies && <h4>Loading...</h4>} */}
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            {/* <Link href={`/movies/${movie.id}`}> */}
            {/* <Link
              href={{
                pathname: `/movies/${movie.id}`,
                query: {
                  title: movie.original_title,
                },
              }}
              as={`/movies/${movie.id}`}
            > */}
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
    </div>
  );
}

// getServerSideProps는 이름 절대 바꾸면 안됨!
// server에서만 실행되기 때문에 client에 절대 보여지지 않음

// loading을 먼저 보여주고 데이터를 받아와서 보여주는 것 대신,
// 여기에서는 api에서 데이터를 받아온 다음 보여줌
export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();
  return {
    props: {
      results,
    },
  };
}
