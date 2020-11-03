import React,{useState} from 'react'
import Link from 'next/link'

const CatComponent = (props)=>{

    const [current, setCurrent] =  useState(0)
    const handleNext = (e)=>{
    document.getElementById('previous').style.color = 'blue'
    if(props.posts.cat.length-1 !== current){
        setCurrent(current+1) 
     }
     else{
         document.getElementById('next').style.color = '#e6e6e6'
         document.getElementById('previous').style.color = 'blue'
    }
    }
    const handlePrevious = (e)=>{
    document.getElementById('next').style.color = 'blue'
    if(current !==0 )
     {
        setCurrent(current-1)  
    }
     else{
        document.getElementById('next').style.color = 'blue'
        document.getElementById('previous').style.color = '#e6e6e6'
     }
    }
    return(
        <section id="main-content" style={{display:'block'}} className="animate-bottom section-top-space nav-clear">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-12 intro-section-container">
                                <div className="intro-img-container" >
                                    <img src={props.intro.image_link} className="img-fluid"/>
                                    <div className="intro-text-container">
                                        <Link href="/news/[cat]/[title]" as={`/news/${props.intro.category}/${props.intro.caption}`}>
                                            <a >
                                            {props.intro.caption}
                                            </a> 
                                        </Link>
                                           
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row sub-section-row">
                            <div className="center sub-section-title">
                                <Link href="/news/[cat]" as={`/news/${props.intro.category}`} >
                                    <a>{props.intro.category}</a>
                                </Link>
                                
                            </div>
                            {props.posts.cat[current]}
                            <div className="container">
                                <div className="row">
                                    <button id="previous" type='submit' onClick={handlePrevious} className="btn">previous</button> 
                                    <button id="next" type="submit" onClick={handleNext} className="btn">next</button> 
                                </div>
                            </div>
                            
                        </div>
                        
                    </div> 

                     
                </div>

                <div className="col-md-3 ">
                    <div className="container">
                        <div className="row sub-section-row">
                            <div className="center sub-section-title">
                            <Link href="/news/[cat]" as={`/news/${props.intro.category}`}>
                                    <a>Latest News</a>
                                </Link>
                            </div>
                            <div className="col-md-12 mis-section-col">
                            {props.posts.latest_news}
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row sub-section-row">
                            <div className="center sub-section-title">
                                <Link href="/news/[cat]" as={`/news/${props.intro.category}`}>
                                    <a>Top News</a>
                                </Link>
                                
                            </div>
                            <div className="col-md-12 mis-section-col">
                            {props.posts.top_news}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
  </section>
    )
}

export default CatComponent