import React, {useState, useEffect} from 'react'
import Head from '../../../components/Head'
import Nav from '../../../components/Nav'
import Link from 'next/link'
import {categoryReturn, filterCat,spliter} from '../../../lib/posts'
import { getPosts } from '../../../lib/db';
import middleware from '../../../middlewares/middleware';
import CatComponent from '../../../components/Cat'
import Loader from '../../../components/Loader'
import Footer from '../../../components/Footer'
import Abstract from '../../../components/Abstract'

const Post =(props)=>{
  const {post} = props;
  
  return(                  
      <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="news-container">
            <Link href="/news/[cat]/[title]" as={`/news/${post.category}/${post.caption}`}>
              <a className="news-items" >
              <img src={post.image_link}  className="img-fluid sub-inner-img"/>
              </a>
             </Link> 
            <Link href="/news/[cat]/[title]" as={`/news/${post.category}/${post.caption}`}>
                <a className="news-items" >
                  {post.caption}
                </a> 
            </Link>
              
          </div>
      </div>
      )
  }


export async function getServerSideProps(context) {
  await middleware.apply(context.req, context.res);
 const posts = await getPosts(context.req, context.params.cat);
  if (!posts) context.res.statusCode = 404;
  const {posts:data} = posts
  const intro = categoryReturn(data, context.params.cat, 1, 'headings')[0];
  const currentCat = filterCat(data, {category:context.params.cat, headings:'not', abstract_cat:'none'})
  return {props:{data, currentCat, intro,}}
}

function Cat(props){
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if(props) {
      setTimeout(()=>{setLoading(false)}, 2000)
    }
  }, [])
const cat = props.currentCat.map((post)=><Post key={post._id} post={post}/>)
const latest_news =  categoryReturn(props.data, 'latest_news', 5, 'abstract_cat').map((post)=><Abstract key={post._id} post={post}/>)
const top_news =  categoryReturn(props.data, 'top_stories', 5, 'abstract_cat').map((post)=><Abstract key={post._id} post={post}/>)
const catArray = spliter(cat, 12)
  return(
<div  id="app-container">
<Head/>
{
  loading?<Loader/>
  :
  <div id="content" >
   
    <Nav/>
    <CatComponent intro={props.intro} posts={{cat:catArray, latest_news, top_news}}/>
    <Footer/>
  </div>
}
      
  
  
</div>
  )
}



export default Cat
