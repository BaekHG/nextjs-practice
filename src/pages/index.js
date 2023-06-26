import Seo from '../components/Seo';
import _ from 'lodash';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
export default function Home({ movies }) {
  const router = useRouter();
  const onClickAction = useCallback((movie) => {
    router.push(`/movies/${movie.title}/${movie.id}`);
    // router.push(
    //   {
    //     pathname: `/movies/${movie.id}`,
    //     query: {
    //       title: movie.title,
    //     },
    //   },
    //   `/movies/${movie.id}`
    // );
  }, []);
  return (
    <div className="movie-container">
      <Seo title="Home" />
      {_.isEmpty(movies) ? (
        <h4>Loading</h4>
      ) : (
        _.map(movies, (movie) => (
          <div className="movie" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4 onClick={() => onClickAction(movie)}>{movie.original_title}</h4>
          </div>

          // <Link href={`/movies/${movie.id}`} key={movie.id}>
          //   <div className="movie" key={movie.id}>
          //     <img
          //       src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          //     />
          //     <h4>{movie.original_title}</h4>
          //   </div>
          // </Link>
        ))
      )}

      <style jsx>{`
        .movie-container {
          display: flex;
          flex-wrap: wrap;

          // display: grid;
          // grid-template-columns: 1fr 1fr;

          // gap: 20px;
        }
        .movie {
          flex-basis: 50%;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/popular`)
  ).json();

  return {
    props: {
      movies: results,
    },
  };
}
