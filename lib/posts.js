import usePost from './useUser'

export function getPostsIds(){
    return [
        {
            params:{
                id: "1"
            }
        },
        {
            params:{
                id: "2"
            }
        },
        {
            params:{
                id:"3"
            }
        },
        {
            params:{
                id:"4"
            }
        },


    ]
}

export async function getPostData(id){
let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())
return{
    id,
   post
    
}
}