import React,{useState} from 'react'
import { useCurrentUser } from '../lib/hooks';


const Nav=()=>{
  const [user] = useCurrentUser();
  const [navState, setNavState] = useState(false);
const navToggle =(e)=>{
  if(!navState){
    document.getElementById('nav-main-content').style.display = "block"
    setNavState(true)
  }else{
  document.getElementById('nav-main-content').style.display = "none"
  setNavState(false)}
}
    return(
        <nav id="nag" className="nav-increase" >
<div className="container-fluid" >
    <div id="lg-nav-btn" className=" pull-right" onClick={navToggle}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div> 
     
  <div className="web-name">
    <a href="/"><img style={{width:'70px', height:'50px'}} src="/images/logo.png" alt="ifactonews" /></a>
  </div>
  <div className="nav-item-container" >
  <ul id="nav-large" className="nav justify-content-end ">
    {user?
    <li  className="nav-item reg-sm">
      <button className="account-dropbtn fs-20 uppercase font-weight-700">{user.name[0]}</button>
  </li>
  :
  <>
    <li  className="nav-item reg-sm">
        <div className="account-dropdown">
          <button className="account-dropbtn"><i className="fas fa-user"></i></button>
          <div className="account-dropdown-content">
            <div className=''>
              <a href="/login">Login</a>
              <a href="signup">SignUp</a>
            </div>
            
          </div>
        </div>
    </li>
    </>
  }
  </ul>
  </div>
</div>


<ul id="nav-main-content" style={{marginLeft:0, paddingLeft:0, marginBottom:0}} >
    <div className="container" style={{margin:0, padding:0}} >
        <div className="grid-xs-1 grid-sm-1 grid-md-1 grid-lg-1 grid-xl-1" >

            <li className="" >
            <a className="nav-link nav-caption ds-block"  href="/news/business" >
              <div className="nav-item grid-xs-25 grid-sm-25 grid-md-25 grid-lg-25 grid-xl-25 fs-xs-16">
                <span className=""><i className="fas fa-business-time"></i></span>
                <span>BUSINESS</span>
                
                </div>
            </a>
            </li>


                <li className="">
                  <a className="nav-link nav-caption ds-block"  href="/news/health" >
                      <div className="nav-item grid-xs-25 grid-xs-25 grid-sm-25 grid-md-25 grid-lg-25 grid-xl-25 fs-xs-16">
                        <span className=""><i className="fas fa-heart"></i></span>
                        <span>HEALTH</span>
                    
                      </div>
                  </a>
                </li>
                
            

             
                <li className="">
                    <a className="nav-link nav-caption ds-block"  href="/news/politics" >
                      <div className="nav-item grid-xs-25 grid-xs-25 grid-sm-25 grid-md-25 grid-lg-25 grid-xl-25 fs-xs-16">
                        <span className=""><i className="fas fa-poll"></i></span>
                        <span>POLITICS</span>
                      </div>
                    </a> 
                </li>


                <li className="">
                  <a className="nav-link nav-caption ds-block"  href="/news/tech_inno" >
                    <div className="nav-item grid-xs-25 grid-xs-25 grid-sm-25 grid-md-25 grid-lg-25 grid-xl-25 fs-xs-16">
                        <span className=""><i className="fas fa-microscope"></i></span>
                        <span>TECH & INNOVATIONS</span>
                    </div>
                  </a>
                </li>

                <li className="">
                  <a className="nav-link nav-caption ds-block"  href="/news/celebrities" >
                    <div className="nav-item grid-xs-25 grid-xs-25 grid-sm-25 grid-md-25 grid-lg-25 grid-xl-25  fs-xs-16">
                        <span className=""><i className="fas fa-star"></i></span>
                        <span>CELEBRITIES</span>
                    </div>
                  </a>
                </li>
                
                <li className="">
                  <a className="nav-link nav-caption ds-block"  href="/news/entertainment" >
                    <div className="nav-item grid-xs-25 grid-xs-25 grid-sm-25 grid-md-25 grid-lg-25 grid-xl-25 fs-xs-16">
                        <span className=""><i className="fa fas fa-icons"></i></span>
                        <span>ENTERINMENT</span>
                    </div>
                  </a>
                </li>

                <li className="">
                  <a className="nav-link nav-caption ds-block"  href="/news/sport" >
                    <div className="nav-item grid-xs-25 grid-xs-25 grid-sm-25 grid-md-25 grid-lg-25 grid-xl-25 fs-xs-16">
                        <span className=""><i className="fas fa-futbol"></i></span>
                        <span>SPORT</span>
                    </div>
                  </a>
                </li>     

                <li className="">
                  <a className="nav-link nav-caption ds-block"  href="/news/social_media" >
                    <div className="nav-item grid-xs-25 grid-xs-25 grid-sm-25 grid-md-25 grid-lg-25 grid-xl-25 fs-xs-16">
                        <span className=""><i className="far fa-comment"></i></span>
                        <span>SOCIAL MEDIA</span>
                    </div>
                  </a>
                </li>
           
        </div>
    </div>
 </ul>

</nav>

    )
}

export default Nav
