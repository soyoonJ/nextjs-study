import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  // console.log(router);

  // 서버사이드 렌더링이기 때문에 링크로 바로 들어오면 에러가 발생.
  // || []이렇게 작성해주면 해결!!
  // const [title, id] = router.query.params || [];
  const [title, id] = params || [];
  return (
    <div>
      {/* 이렇게 하면 직접 홈페이지로 넘어왔을 때는 Loading이 뜨게 됨
        상세페이지를 클릭했을 때만 title이 정상적으로 넘어옴 */}
      {/* <h4>{router.query.title || "Loading..."}</h4> */}
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
