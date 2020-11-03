
export default function Post(props){
    const {post} = props;
    
    return(                  
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="news-container">
                {
                post.image_link !== null ?
                <a className="news-items" href=''>
                <img src={post.image_link} className="img-fluid sub-inner-img" />
                </a>
                :
                <a className="news-items" href=''>
                <img src={post.image_link}  className="img-fluid sub-inner-img"/>
                </a>
                }
              <a className="news-items" href="">{post.caption}
              </a>   
            </div>
        </div>
        )
    }