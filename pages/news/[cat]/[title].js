import Head from '../../../components/Head'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import Loader from '../../../components/Loader'
import {categoryReturn, filterCat,spliter} from '../../../lib/posts'
import { getSingle, getLatest, getTopNews } from '../../../lib/db';
import middleware from '../../../middlewares/middleware';
import Single from '../../../components/Single'
import Abstract from '../../../components/Abstract'
import React, {useState, useEffect} from 'react'
import {NextSeo} from 'next-seo'

export async function getServerSideProps(context) {
  await middleware.apply(context.req, context.res);
 const single = await getSingle(context.req, context.params.title);
 const latest = await getLatest(context.req);
 const topNews = await getTopNews(context.req);
  if (!single || !latest || !topNews) context.res.statusCode = 404;
  return {props:{single, latest, topNews}}
}


function SinglePost(props){
  const {single:{single}, latest:{latest_news}, topNews:{top_news} }= props
  const latestObj = latest_news.map((post)=><Abstract key={post._id} post={post}/>)
  const topNewsObj = top_news.map((post)=><Abstract key={post._id} post={post}/>)
  const [loading, setLoading] = useState(true)
  const [location, setLocation]= useState({});
  useEffect(() => {
    setLocation(window.location.href)
    if(props) {
      setTimeout(()=>{setLoading(false)}, 2000)
    }
  }, [])
  return(
  <div  id="app-container">
   <NextSeo title='ifactonews' 
      description='A Nigerian news website for news lovers' 
      canonical='https://ifactonews.com'
      openGraph={{
        url: {location},
        title: `${single.caption}`,
        description: `${single.caption}`,
        images: [
          {
            url: `${single.image_link}`,
            width: 800,
            height: 600,
            alt: `${single.caption}`,
          },
          {
            url: `${single.image_link}`,
            width: 900,
            height: 800,
            alt: 'ifactonews Logo',
          },
          { url: `${single.image_link}`},
          { url: `${single.image_link}`},
        ],
        site_name: 'Ifactonews',
      }}
      twitter={{
        handle: '@webdevelopa',
        site: '@ifactonews',
        cardType: 'summary_large_image',
      }}/>
    <Head/>
    {loading ? <Loader/>
    :
    <div id="content" >
      
    <Nav/>
    <Single intro={props.intro} posts={{single, latestObj, topNewsObj}}/>
    <Footer/>
  </div>
  }
    
    
  </div>

  )
}



export default SinglePost