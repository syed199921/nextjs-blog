import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export  default  function usePost(id){
    const {data,error,isLoading} =  useSWR(`https://jsonplaceholder.typicode.com/posts/${id}`,fetcher)

    console.log(`Data: ${data}\nError: ${error}\nLoading: ${isLoading}}`)
    
    return{
        post: data,
        postNotFound:error,
        isLoading: isLoading
    }
}