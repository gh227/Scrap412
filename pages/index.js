import Head from '../components/Head'
import Nav from '../components/Nav'
import Intro from '../components/Intro'
import Footer from '../components/Footer'
import {categoryReturn, filterCat} from '../lib/posts'
import React, {useState,useEffect} from 'react'
import fetch from 'node-fetch'
import useSWR from 'swr'
import Link from 'next/link'
import Loader from '../components/Loader'
import {NextSeo}  from 'next-seo'
import Abstract from '../components/Abstract'

const fetcher =async (url)=>{const r = await fetch(url)
return r.json()}

const Post =(props)=>{
const {post} = props;
return(                  
    <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="news-container ">
            
            <Link href='/news/[cat]/[title]' as ={`/news/${post.category}/${post.caption}`}>
              <a className="news-items" >
                <img src={post.image_link} className="img-fluid sub-inner-img" />
              </a>
            </Link>
           
            <Link href='/news/[cat]/[title]' as={`/news/${post.category}/${post.caption}`}>
              <a className="news-items" >{post.caption}
              </a> 
            </Link>
            
        </div>
    </div>
    )
}



export async function getServerSideProps() {
    const data = await fetcher(`${process.env.HOST}/api/posts`)
    return { props: { data } }
  }

 
 
function Index (props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    props && setTimeout(()=>{setLoading(false)},2000)
  }, [])
    const initialData = props.data
   const { data } = useSWR(`${process.env.HOST}/api/posts`, fetcher, { initialData })
   const intro = categoryReturn(data.posts, 'intro', 1, 'abstract_cat')[0]
   const business = filterCat(data.posts, {category:'business', headings:'not', abstract_cat:'none'}).map((post)=><Post key={post._id} post={post}/>)
   const politics = filterCat(data.posts, {category:'politics', headings:'not', abstract_cat:'none'}).map((post)=><Post key={post._id} post={post}/>)
   const celebrities = filterCat(data.posts, {category:'celebrities', headings:'not', abstract_cat:'none'}).map((post)=><Post key={post._id} post={post}/>)
   const sport = filterCat(data.posts, {category:'sport', headings:'not', abstract_cat:'none'}).map((post)=><Post key={post._id} post={post}/>)
   const social_media = filterCat(data.posts, {category:'social_media', headings:'not', abstract_cat:'none'}).map((post)=><Post key={post._id} post={post}/>)
   const tech_inno = filterCat(data.posts, {category:'tech_inno', headings:'not', abstract_cat:'none'}).map((post)=><Post key={post._id} post={post}/>)
   const health = filterCat(data.posts, {category:'health', headings:'not', abstract_cat:'none'}).map((post)=><Post key={post._id} post={post}/>)
   const latest_news =  categoryReturn(data.posts, 'latest_news', 5, 'abstract_cat').map((post)=><Abstract key={post._id} post={post}/>)
   const top_news =  categoryReturn(data.posts, 'top_stories', 5, 'abstract_cat').map((post)=><Abstract key={post._id} post={post}/>)
    return (
      <div  id="app-container">
      <NextSeo title='ifactonews' 
      description='A Nigerian news website for news lovers' 
      canonical='https://ifactonews.com'
      openGraph={{
        url: `${process.env.HOST}/images/logo2X2.png`,
        title: 'ifactonews',
        description: `News @ it's best`,
        images: [
          {
            url: `${process.env.HOST}/images/logo2X2.png`,
            width: 800,
            height: 600,
            alt: 'ifactonews Logo',
          },
          {
            url: `${process.env.HOST}/images/logo2X2.png`,
            width: 900,
            height: 800,
            alt: 'ifactonews Logo',
          },
          { url: `${process.env.HOST}/images/logo2X2.png`},
          { url: `${process.env.HOST}/images/logo2X2.png` },
        ],
        site_name: 'Ifactonews',
      }}
      twitter={{
        handle: '@webdevelopa',
        site: '@ifactonews',
        cardType: 'summary_large_image',
      }}/>
      <Head/>
      {loading?
      (<Loader/>)
      :
      (
        <div id="content">
         
        <Nav/>
        <Intro intro={intro} posts= {{latest_news, top_news, business, politics, celebrities, sport, social_media,
        tech_inno, health}}/>
        <Footer />
        </div>
      )
      }
    </div>
      
    
    
    
    )
  }
export default Index
