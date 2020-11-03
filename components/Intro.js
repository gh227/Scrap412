import Link from 'next/link'

const Intro = (props)=>{
const {posts, intro} = props;
return(
<section id="main-content" style={{display:'block'}} className="animate-bottom section-top-space nav-clear">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-9">
                <div className="row">
                    <div className="col-md-12 intro-section-container">
                            <div className="intro-img-container" >
                                <img src={intro.image_link} className="img-fluid"/>
                                <div className="intro-text-container">
                                <Link href="/news/[cat]/[title]" as={`/news/${intro.category}/${intro.caption}`}>
                                    <a>{intro.caption}</a>   
                                </Link>
                                     
                                </div>
                            </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row sub-section-row">
                        <div className="center sub-section-title"><a href="/news/business">Business</a>
                        </div>
                        {posts.business}
                    </div>
                </div>
                <div className="container">
                    <div className="row sub-section-row">
                        <div className="center sub-section-title"><a href="/news/politics">Politics</a>
                        </div>
                        {posts.politics}
                    </div>
                </div>
                <div className="container">
                    <div className="row sub-section-row">
                        <div className="center sub-section-title"><a href="/news/health">Health</a>
                        </div>
                        {posts.health}
                    </div>
                </div>

                <div className="container">
                    <div className="row sub-section-row">
                        <div className="center sub-section-title"><a href="/news/sport">Sports</a>
                        </div>
                        {posts.sport}
                    </div>
                </div>

                <div className="container">
                    <div className="row sub-section-row">
                        <div className="center sub-section-title"><a href="/news/celebrities">Celebrities</a>
                        </div>
                        {posts.celebrities}
                    </div>
                </div>
                
                <div className="container">
                    <div className="row sub-section-row">
                        <div className="center sub-section-title"><a href="/news/celebrities">Social Media</a>
                        </div>
                        {posts.social_media}
                    </div>
                </div>
                
                <div className="container">
                    <div className="row sub-section-row">
                        <div className="center sub-section-title"><a href="/news/tech_inno">Tech & Innovation</a>
                        </div>
                        {posts.tech_inno}
                    </div>
                </div>
                
            </div>
            <div className="col-md-3 ">
                <div className="container">
                    <div className="row sub-section-row">
                        <div className="center sub-section-title">
                            <Link href="/" as="/">
                               <a>Latest News</a>
                            </Link>
                            
                        </div>
                        <div className="col-md-12 mis-section-col">
                            {posts.latest_news}
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row sub-section-row">
                        <div className="center sub-section-title">
                            <Link href="/" as="/">
                               <a>Top News</a>
                            </Link>
                        </div>
                        <div className="col-md-12 mis-section-col">
                            {posts.top_news}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
    )
}

export default Intro
