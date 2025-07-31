import React from "react";
import { API_OPTIONS, Multilingual } from "../utils/constants";
import { useSelector } from "react-redux";
import { groq } from "../utils/Groq";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addgptmovie } from "../utils/langslice";

const GptSearch = () => {
  const dispatch = useDispatch();
  const input = useRef();
  const cur_lang = useSelector((state) => state.language.lang);
  const TMDBapi = async (moviename) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${moviename}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    const result = await json.results;
    return result;
  };
  async function main(e) {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `justgive me  5 movies related to  ${input.current.value} , output should be only name of the movies with comma seprated nothing else dont write Here are 5 action movies: like the example ahead Example - sholay, De dana dan , Amar Akbar Anthony,Goal , Shershah`,
        },
      ],
      model: "llama3-8b-8192",
    });
    const movieName = chatCompletion.choices[0].message.content.split(",");

    const promiseArray = movieName.map((movie) => TMDBapi(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addgptmovie({ movies: movieName, tmdbarray: tmdbResults }));
  }

  return (
    <div className="relative  md:left-[75vh] top-[40vh]">
      <form onSubmit={(e) => e.preventDefault()} className="">
        <input
          ref={input}
          placeholder={Multilingual[cur_lang].placeholder}
          className="mt-8  md:gap-2 p-4 w-96 rounded-md"
        ></input>
        <button
          onClick={(e) => {
            main(e);
          }}
          className="bg-red-800 rounded-md p-4"
          type="submit"
        >
          {Multilingual[cur_lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
