import React from "react";
const MoviePoster = ({ id, props }) => {
  return (
    <div className="w-36 md:w-48 pr-4 ">
      <img
        onClick={() =>
          window.open(`https://www.themoviedb.org/movie/${id}`, "_blank")
        }
        alt="posters"
        src={`https://image.tmdb.org/t/p/w500/${props}`}
      ></img>
    </div>
  );
};

export default MoviePoster;
