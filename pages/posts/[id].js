import Layout from '../../components/layout'
import {getPostsIds, getPostData} from "../../lib/posts"
import usePost from '../../lib/useUser'
import Link from 'next/link'
import utils from '../../styles/utils.module.css'


export async function getStaticPaths(){
    const paths = getPostsIds()
    console.log(`Paths: ${JSON.stringify(paths)}`)
    return{
        paths,
        fallback: false
    }
}
export default function Post({postData}){
    // console.log(`Post Component id: ${typeof(id)}`)
    // const {post} = usePost(id)
    // console.log(`Post Component post: ${post}`)
    
    return <Layout>
        <h1 className={utils.headingXl}>Post Id: {postData.post.id}</h1>
        <p><b>Title: </b>{postData.post.title}</p>
        <p><b>Description: {postData.post.body}</b></p>   

        <div className={utils.lightText}>
        <p><Link href="http://localhost:3000/posts">Back to Main Blog page</Link></p>    
        </div> 
    </Layout>
}

export async function getStaticProps({params}){
    console.log(`Type of params: ${typeof(params.id)}`)
    let id = parseInt(params.id)
    console.log(`Type of params: ${typeof(id)}`)
    const postData = await getPostData(id)
    console.log(`postData: ${postData}`)
    return{
        props:{
            id,
            postData
        }
    }
}