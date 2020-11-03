import {useCurrentUser} from '../lib/hooks.js'
import React, {useState, useEffect} from 'react'
import Head from '../components/Head'
import Router from 'next/router'
import Loader from '../components/Loader'


const Signup= ()=>{
const [errorMsg, setErrorMsg] = useState('')
const [inputValue, setInputValue] = useState({name:'', email:'', password:'', confirm_password:''})
const [user, {mutate}] = useCurrentUser()
const [loading, setLoading] = useState(true)
useEffect(()=>{
  if(user) {
    Router.push('/');
  }else{
    setTimeout(()=>{setLoading(false)}, 2000)
  }
}, [user])
const handleInput = (e)=>{
    const value = e.target.value;
    setInputValue({...inputValue, [e.target.name]:value})
}
const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
    const body = {
        name: e.currentTarget.name.value,
        email:e.currentTarget.email.value,
        password:e.currentTarget.password.value
    }
    const res = await fetch(`/api/users`,{
        method: 'POST',
        body:JSON.stringify(body),
    });
    

    if(res.status===201){
        const userObj = await res.json();
        mutate(userObj);
    }
    else{
        setErrorMsg(await res.text());
    }
}
catch(e){
    console.err(e)
}
}

return(
      <div id="app-container">
      <Head/>
      {loading ? <Loader/>:
        <div id="main-container" className="main-container">
        <div className="content-container">
         <div id="site-details">
            <a href="/" style={{fontSize: "2rem"}}>ifactonews</a>
          </div>
          <div id="page-title">
            SignUp
          </div>
            <div id="page-contents" >
            <form  onSubmit={handleSubmit} >
            {errorMsg &&
            <div className="alert alert-danger">
                <strong>{errorMsg}</strong>
            </div>}
                <div className="form-group">
                    <label className="input-container">
                    <span id="lname-tag" className="input-label email-label">Name</span>
                    <input  id="lname" type="text" className="form-control" name="name" onChange={handleInput} value={inputValue.name}/>
                    </label>
                </div>
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
                <div className="form-group">
                    <label className="input-container">
                    <span id="confirm_password-tag" className="input-label password-label">Confirm password</span>
                    <input id="confirm_password" type="password" className="form-control" name="confirm_password" onChange={handleInput} value={inputValue.confirm_password} />
                    </label>
              </div>
    
           
              <button id="login-button" type="submit" className="submit-button">
                Register
              </button>
    
    
              <div className="forgot-section">
                {/*<a href="/" >Forgot password ?</a>*/}
                <a href="/login" className="signup-link">Already have an Account?</a>
              </div>
            </form>
            </div>
            </div>
            </div>
      }
      
    </div>        
    )
}

export default Signup;
