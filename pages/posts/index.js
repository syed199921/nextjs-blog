import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import styles from '../../styles/Post.module.css'
import Layout from '../../components/layout'
import PostCard from "../../components/card"



export default function FirstPost(props){
    return(
        <>
        <Layout>
            <Head>
                <title>First Post</title>
                <Script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
                    onLoad={() =>  console.log("Bootstrap loaded successfully")}
                > Bootstrap Script 
                </Script>
            </Head>
            <main className={styles.main}>
                {/* <h1>{props.title}</h1>
                <p>{props.description}</p>
                <Image
                src={props.image}
                height = {144}
                width = {144}
                alt = "Profile Image"
                /> */}

                

                <PostCard id={1} />
                <ul>
                <li>Link to blog 1: <Link href="http://localhost:3000/posts/1">blog 1</Link></li>
                
                <li>Link to blog 2: <Link href="http://localhost:3000/posts/2">blog 2 </Link></li>
                </ul>
                {/* <Link href="localhost:3000/posts/1" />
                <Link href="localhost:3000/posts/2" /> */}

                
                
            </main>
        </Layout>
        </>
    
    
    )
}

async function getPosts(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts = response.json()
    if(!posts)
    {
        console.log("Posts fetching failed")
        return null
    }

    return posts
}

export async function getStaticProps(){
    let posts =  await getPosts()
    console.log("Posts:",posts)

    if(posts){
        return{
            props:{
                title: posts[0].title,
                description: posts[0].body,
                image: "/images/employee.jpeg"
            }
        }
    }

    return{
            props:{
                title: "First Post",
                description: "This is the first post",
                image: "/images/employee.jpeg"
            }
        }
    
}