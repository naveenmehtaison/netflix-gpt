import Groq from "groq-sdk";
// import {API_KEY} from '../utils/constants'
export const groq = new Groq({
    apiKey: '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' // This is the default and can be omitted
  ,dangerouslyAllowBrowser: true },);