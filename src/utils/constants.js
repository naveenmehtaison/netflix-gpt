export const LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
export const BG = 'https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg'
export const API_OPTIONS  = {
    method:"GET",
    headers:{
        accept:'application/json',
        Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
    }
}
export const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?query=taare%20zameen%20par&include_adult=false&language=en-US&page=1' 
export const API_KEY = process.env.REACT_APP_API_KEY
export const POSTERS = 'https://image.tmdb.org/t/p/w500/'
export const Multilingual = {
    hindi:{
        identifier:'hi',
        search:'खोज',
        placeholder:'आप क्या देखना चाहते हैं?',
        submit:'जमा '
    },
    en:{
        indentifier:'en',
        search:'search',
        placeholder:'What are you looking for?',
        submit:'submit'

    },
    kumaoni:{
        identifier:'kumauno',
        search:'ढूंढ',
        placeholder: 'तैं के देखूं चा छ',
    },
    marathi:{
        identifier:'marathi',
        search:'शोध',
        placeholder: 'तुला काय पहायचे आहे?',

    },
    
}

