import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Image from 'next/image'





const { BLOG_URL, CONTENT_API_KEY } = process.env

type Post = {
	title: string
	slug: string
	feature_image: string
	custom_excerpt: string
}

async function getPosts() {
	// curl ""
	const res = await fetch(
		`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,feature_image,published_at,custom_excerpt`
	).then((res) => res.json())

	const posts = res.posts

	return posts
}

export const getStaticProps = async ({ params }) => {
	const posts = await getPosts()
	return {
		revalidate: 10,
		props: { posts }
	}
}

const Home: React.FC<{ posts: Post[] }> = (props) => {
	const { posts } = props

	return (
		<div className={styles.home}>

			
			
			<div className={styles.homeFront}>
				
				<h1><strong>Rakettåsen</strong> <small>Skilinje</small></h1>
				<p>Rakettåsen Skilinje består fem skiløpere fra Gjøvik og Toten kledd i rosa kondomdresser.
					Følg oss daglig på <a href="https://www.instagram.com/rakettaasen_skilinje/">@rakettaasen_skilinje</a>.
					 </p> 
					
					<Link href="/about">
						<a className={styles.homeButton}>Les Mer</a>
							</Link>

					 <div className={styles.mainImage}>
                    <Image src="/assets/Rakettaasen_Square_RGB.png"
                        width={400}
                        height={400}
                        quality={100}
                        alt="main-img"
                        />
                </div>
							
			</div>
		
		<div className={styles.container}>
		
			<h1>Siste <strong>Nytt</strong></h1>
			<ul>
				{posts.map((post, index) => {
					return (
						<li className={styles.postItem} key={post.slug}>
							<li className={styles.postLeft}>
							<h1>{post.title}</h1>
          					<p key={index} className={styles.postExcerpt}>
								  {post.custom_excerpt}
								  </p>
          			
							<Link href="/post/[slug]" as={`/post/${post.slug}`}>
								<a className={styles.postButton}>Les Mer</a>
							</Link>
							  </li>
							  <li className={styles.postRight}>
								  <img 
								 className={styles.postImg} 
						  		src={post.feature_image} 
						 		alt="blog-image"/>
						</li>
						</li>
					)
				})}
			</ul>

			
			
		</div>

		<div className={styles.bottomImage}>
           <Image src="/assets/Rakettaasen_Square_RGB.png" width={400} height={400} />
		   <p>Rakettåsen Skilinje - 2020</p>
           </div>

		

		</div>
	)
}

export default Home