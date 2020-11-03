import Link from 'next/link'

export default function Abstract(props){

    const {post} = props;
    return(                  
        <div className="col-md-12 col-sm-12">
            <div className="news-container news-tablet-container">
           
                <Link href='/news/[cat]/[title]' as ={`/news/${post.category}/${post.caption}`}>
                 <a className="news-items" >
                  <img src={post.image_link} className="img-fluid sub-inner-img" />
                </a>
                </Link>
               
              <Link href='/news/[cat]/[title]' as ={`/news/${post.category}/${post.caption}`}>
                <a className="news-items">
                  {post.caption}
                </a>   
              </Link>
            </div>
        </div>
  )
}
