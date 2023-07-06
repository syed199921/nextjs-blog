import useSWR from 'swr'

export default function PostDetails(){
    const  fetcher = (...args) => fetch(...args).then(res => res.json())
    let {data,error, isLoading} = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

    console.log(`Data: ${data}\nError: ${error}\nLoading: ${isLoading}`)


   
    if(error){
        return <div>Failed to fetch post details</div>
    }
    if(isLoading)
    {
        do{
            return <div>Loading...</div>
        }while(data !== undefined)
        
    }
    
        return(
            <div>
                <h1>Title: {data[0].title}</h1>
                <p>Body: {data[0].body}</p>
            </div>
        )
    
    
}