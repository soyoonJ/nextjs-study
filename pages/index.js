// pages 폴더 안에 있는 다른 파일과 달리,
// index.js는 예외적으로 홈으로 연결시켜줌.
// => localhost:3000/
// /index로 들어가면 404 뜸

// import react 안해도 일반 태그만 사용할 경우 페이지 내용 렌더링 됨.
// useState 같은 훅 사용하려면 import 해와야 하긴 함
// import {useState} from 'react';
// import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home() {
  // const [counter, setCounter] = useState(0)
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch("/api/movies")).json();
      // console.log(results);
      setMovies(results);
    })();
  }, []);
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
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
