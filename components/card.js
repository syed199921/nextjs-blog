import usePost from '../lib/useUser'

export default function PostCard({id}){
    console.log(`ID: ${id}`)
    const {post, postNotFound, isLoading} = usePost(id)
    console.log(`Post: ${post}`)
    if(postNotFound){
        return <div>Post Not Found</div>
    }
    if(isLoading){
        do{
            return <div>Loading...</div>
        }while(post !== undefined)
       
    }

    return(
        <div>
            <p><b>User ID:</b> {post.userId}</p>
            <p><b>Title:</b> {post.title} </p>
            <p><b>Description:</b> {post.body}</p>
        </div>
    )

}