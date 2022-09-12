import Head from "next/head";

export default function Seo({ title }) {
  // react helmet 써서 title 바꿨던 것을 nextjs에서는 내부 제공 기능으로 바로 사용 가능
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
