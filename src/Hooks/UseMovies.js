import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { addmovie } from "../utils/movieslice"
import { API_OPTIONS } from "../utils/constants"
const UseMovie=()=>{
    const dispatch = useDispatch()
    const GetMovies= async()=>{
    const g = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS)
    const data = await g.json()
    dispatch(addmovie(data.results))

    }
    // const GetMovies = async () => {
    //   try {
    //     const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    useEffect(()=>{
    GetMovies()

    },[])
}
export default UseMovie