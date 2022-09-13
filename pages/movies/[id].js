import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  //   console.log(router);
  return (
    <div>
      {/* 이렇게 하면 직접 홈페이지로 넘어왔을 때는 Loading이 뜨게 됨
        상세페이지를 클릭했을 때만 title이 정상적으로 넘어옴 */}
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
}
