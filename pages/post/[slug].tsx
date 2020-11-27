import Link from 'next/link'
import { useRouter } from 'next/router'
import Blogstyles from '../../styles/Blog.module.scss'
import styles from '../../styles/Home.module.scss'
import { useState } from 'react'
import Image from 'next/image'

const { BLOG_URL, CONTENT_API_KEY } = process.env

async function getPost(slug: string) {
    const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html,reading_time`
  ).then((res) => res.json())
    
  const posts = res.posts
 return posts[0]
}



// Ghost CMS Request
export const getStaticProps = async ({ params }) => {
    const post = await getPost(params.slug)
    return {
      props: { post },
      revalidate: 10
    }
  
  }

  // on first req = Ghost CMS is made
  // on other requets ... = fylesystems is called
export const getStaticPaths = () => {
    //paths -> slugs which are allowed // fallback _> 
    return {
        paths: [],
        fallback: true

    }
}

type Post = {
	title: string
	html: string
    slug: string
    reading_time: string
}

const Post: React.FC <{post: Post}> = ( props ) => {
    
    //console.log(props)

    const { post } = props

    const router = useRouter()

    if(router.isFallback) {
        return (
            <div className={Blogstyles.loading}>
            <h1>Laster opp materiale til Rakettåsen </h1>
            </div>
        )
    }

    return (
        <div className={Blogstyles.blogContainer}>
            <Link href="/"><a className={Blogstyles.goback}>Klyv Tilbake</a></Link>
            <div className={Blogstyles.blog}>
            <h1>{post.title}</h1>
            <h3>Det tar ca. {post.reading_time} minutter å lese denne artikkelen av Rakettåsen Skilinje</h3>
            <div className={Blogstyles.blogContent} dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </div>
            <div className={Blogstyles.bottom}>
		    <p><strong>Rakettåsen</strong> Skilinje</p>

           </div>
        </div>
        
    )
}
export default Post