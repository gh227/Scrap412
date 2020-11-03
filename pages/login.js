import React, { useState, useEffect } from 'react';
import Head from '../components/Head'
import Router from 'next/router';
import { useCurrentUser } from '../lib/hooks';
import Loader  from '../components/Loader'

function Login(){
    const [errorMsg, setErrorMsg] = useState('');
    const [user, { mutate }] = useCurrentUser();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      if(user) {
      Router.push('/');
    }else{
      setTimeout(()=>{setLoading(false)}, 2000)
    }

    }, [user]);
    const [inputValue, setInputValue] = useState({email:'', password:''})
    const handleInput = (e)=>{
        setInputValue({...inputValue, [e.target.name]:e.target.value})
    }

    const handleSubmit =  async (e)=>{
      e.preventDefault();
      const body = {
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      };
      const res = await fetch(`/api/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        const userObj = await res.json();
        mutate(userObj);
      } else {
        setErrorMsg('Incorrect username or password. Try again!');
      }
    }

    return(
      <div id="app-container">
        <Head/>
      {loading ? <Loader/>
       :
       <div id="content" >
           <Head/>
       <div id="main-container" className="main-container">
       <div className="content-container">
        <div id="site-details">
           <a href="/" style={{fontSize: "2rem"}}>ifactonews</a>
         </div>
         <div id="page-title">
           Login
         </div>
           <div id="page-contents" >
           <form onSubmit = {handleSubmit}>
           {errorMsg &&
           <div className="alert alert-danger">
               <strong>{errorMsg}</strong>
           </div>}
   
               <div className="form-group">
                   <label className="input-container">
                   <span id="email-tag" className="input-label email-label">Email</span>
                   <input  id="email" type="email" className="form-control" name="email" onChange={handleInput} value={inputValue.email} />
                   </label> 
               </div>
               <div className="form-group">
                   <label className="input-container">
                   <span id="password-tag" className="input-label password-label">Password</span>
                   <input id="password" type="password" name="password" className="form-control" onChange={handleInput} value={inputValue.password} />
                   </label>
               </div>
               
   
          
             <button id="login-button" type="submit" className="submit-button">
               Login
             </button>
   
   
             <div className="forgot-section">
           <a href="/" >{/*'Forgot password ?'*/}</a>
               <a href="/signup" className="signup-link">Sign up instead?</a>
             </div>
           </form>
           </div>
           </div>
           </div>
   
   
       </div>}
     
    
       
      
      </div>       
        )
}

export default Login