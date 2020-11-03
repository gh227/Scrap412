import React, {useState, useEffect} from 'react'
import {useCurrentComments} from '../lib/hooks'
import Link from 'next/link'
import { useCurrentUser } from '../lib/hooks';
import {EmailShareButton, 
        FacebookShareButton,
        FacebookIcon, 
        TwitterShareButton, 
        TwitterIcon,
        WhatsappShareButton,
        WhatsappIcon,
        TelegramShareButton,
        TelegramIcon,
        LinkedinShareButton,
        LinkedinIcon} from 'react-share'
import {Markup} from 'interweave'

export default function Single(props){
const [user] = useCurrentUser()
const {single, latestObj, topNewsObj} = props.posts
const [errMsg, setErrMsg] = useState('')
const [commentObj, setCommentObj] = useState([])
const [comments, { mutate }] = useCurrentComments(`/api/comments/${single._id}`)
const [location, setLocation]= useState({});

const CommentBlock = (props)=>(
 
<div className="card showcomments-main bg-light-grey">  
   <div className="comment-img-container">
        <i className="fas fa-user"></i>
    </div>
    <div className="comments-item">
        <div>{props.comment.comment}</div>
        <div >{new Date(props.comment.createdAt).toString().slice(0,16)}</div>
    </div>
</div>
)


const CommentSection = ()=>{
  
    if(comments instanceof Array){
       return comments.map(value =><CommentBlock key={value._id} comment={value}/> )
    }
    return []
}

useEffect(() => {
    setLocation(window.location.href)
setCommentObj(CommentSection())
}, [comments])
async function handleSubmit(e){
    e.preventDefault();
    const body = {
      comment: e.currentTarget.comment.value,
      post_id: single._id
    };
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if(res.status === 201){
        const commentObj = (await res.json())
        mutate(commentObj);
       
        document.getElementById('comment').value = ''
    }
    else{setErrMsg(await res.text())}
}

return(
<section id="main-content" style={{display:'block'}} className="animate-bottom section-top-space nav-clear">
        <div className="container-fluid">
            <div className="row">
    <div className="col-md-9 ">
                <div className="single-container">
                    <div className="center single-caption">
                        {single.caption}
                    </div>
                    <div className="center single-date">
                        {new Date(single.createdAt).toString().slice(0,16)}
                    </div>
                    
                    <div className="port-img">
                        <img src={single.image_link} className="img-fluid singlepost-img" />
                    </div>
                
                <div style={{whiteSpace:'pre-line'}} className="single-content" 
                >
                 <Markup content={single.content} />
                {single.source !== '' &&
                <div className="mt-2 mb-3">
                    <b>Source: </b><a href="{single.source_link}}">{single.source}</a>
                </div>
                }


<div className="container margin-gap position-relative">
                    <div className="sharing-img"><img src="/images/sharing_caring.png"/></div>
                        <div className="social-share-grid">
                            <div className="social-share-grid-items">
                            <FacebookShareButton url={location}>
                               {/*<button className="btn btn-success main-color">f</button>*/}
                              < FacebookIcon size="40px" round="true"/>
                            </FacebookShareButton>
                            <LinkedinShareButton url={window.location.href}>
                               {/*<button className="btn btn-success main-color">f</button>*/}
                              < LinkedinIcon size="40px" round="true"/>
                            </LinkedinShareButton>
                            <WhatsappShareButton url={window.location.href}>
                               {/*<button className="btn btn-success main-color">f</button>*/}
                              <WhatsappIcon size="40px" round="true"/>
                            </WhatsappShareButton>
                            <TelegramShareButton url={window.location.href}>
                               {/*<button className="btn btn-success main-color">f</button>*/}
                              <TelegramIcon size="40px" round="true"/>
                            </TelegramShareButton>
                            <TwitterShareButton url={window.location.href}>
                               {/*<button className="btn btn-success main-color">f</button>*/}
                              <TwitterIcon size="40px" round="true"/>
                            </TwitterShareButton>
                            </div>   
                        </div>
                </div>
                </div>

                

        <div className="single-comments" >
                <div className=" container single-comments-container" >
                    <div className="single-comments-col">
                        <div className="single-comments-inner">Comments</div>
                        {/*loop comments*/} 
                            {commentObj}
                        <div id="showcomments"></div>
                    </div>
                </div>

                {/*if user exist*/}
                <div className="post-comment" >
                Join the conversation                     
                </div>
                <form onSubmit={handleSubmit} id="comment-form" >
                                           
                <div className="comment-form-container">
                { errMsg!==''&&              
                <div className="alert alert-danger">
                    <strong>{errMsg}</strong>
                </div>
                }
                    
                    <div className="form-group">
                        {/*"input type=hidden name=post_id value=*/}
                        <textarea className="form-control" rows="3" id="comment" 
                        name="comment"></textarea>
                    </div>
                    
                    <div className="form-group">
                        <button id="comment-button" type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>   
            </form>
                {!user &&
                    <a href="" className="create-comments">Create an Account to join the conversation </a>
                }
            </div>
        </div>
    </div>
    <div className="col-md-3 ">

                <div className="container">
                    <div className="row sub-section-row">
                        <div className="center sub-section-title">
                            Latest News
                        </div>
                        <div className="col-md-12 mis-section-col">
                            {latestObj}
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row sub-section-row">
                        <div className="center sub-section-title">
                          Top News
                        </div>
                        <div className="col-md-12 mis-section-col">
                            {topNewsObj}
                        </div>
                    </div>
                </div>              
            </div>
        </div>
    </div>
</section>
)
}
