
import  jsonplaceholder from '../apis/jsonplaceholder'

export const FetchPost=()=> async dispatch=>{
const response=await jsonplaceholder.get('/posts');
console.log("my api response",response)
dispatch({type:'FETCH_POSTS',payload:response})


}