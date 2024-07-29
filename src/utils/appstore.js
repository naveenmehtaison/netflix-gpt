import { configureStore} from "@reduxjs/toolkit";
import userslice from "./userslice";
import movieslice from "./movieslice";

const appstore = configureStore({
    reducer:{
        user:userslice,
        movie:movieslice


    }
})
export default appstore