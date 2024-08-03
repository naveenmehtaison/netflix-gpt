import { configureStore} from "@reduxjs/toolkit";
import userslice from "./userslice";
import movieslice from "./movieslice";
import langslice from "./langslice";
const appstore = configureStore({
    reducer:{
        user:userslice,
        movie:movieslice,
        language:langslice


    }
})
export default appstore