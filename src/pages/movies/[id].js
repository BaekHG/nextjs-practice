import { useRouter } from 'next/router';

const MovieDetail = (props) => {
  const router = useRouter();

  return (
    <div>
      <h1>{props?.title}</h1>
    </div>
  );
};

export default MovieDetail;

export function getServerSideProps(ctx) {
  const { title } = ctx.query;

  return {
    props: { title },
  };
}
