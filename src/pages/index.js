import Seo from '../components/Seo';
import { useState, useEffect } from 'react';
import _ from 'lodash';
export default function Home({ movies }) {
  // const [movies, setMovies] = useState([]);

  // console.log(results);

  return (
    <div className="movie-container">
      <Seo title="Home" />
      {_.isEmpty(movies) ? (
        <h4>Loading</h4>
      ) : (
        _.map(movies, (movie) => (
          <div className="movie" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
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
