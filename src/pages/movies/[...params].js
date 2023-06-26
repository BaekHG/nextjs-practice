import { useRouter } from 'next/router';
import Seo from '../../components/Seo';

const MovieDetail = ({ params }) => {
  const [title, id] = params;

  return (
    <div>
      <Seo title={title} />
      <h1>{title}</h1>
    </div>
  );
};

export default MovieDetail;

export function getServerSideProps({ params: { params } }) {
  //for server side render
  return {
    props: { params },
  };
}
