import Head from '../../components/Head'
import React, {useState, useEffect} from 'react'
import { useCurrentUser } from '../../lib/hooks';
import Router from 'next/router'
import middleware from '../../middlewares/middleware'
import {getSingleUpdated} from '../../lib/db'


export async function getServerSideProps(context) {
    await middleware.apply(context.req, context.res);
   const single = await getSingleUpdated(context.req, context.params._update, '_id');
    if (!single) context.res.statusCode = 404;
    return {props:{single}}
  }


const Update=(props)=>{
console.log(props, " getting it here")
    const {single} =  props.single;
  //const [user] = useCurrentUser();
  const [errMsg, setErrMsg] = useState('')
  const [auth, setAuth] = useState(false)
  const [inputValue, setInputValue] = useState({
    phoneNumber:single.phoneNumber,
    code:single.code, 
})

  useEffect(()=>{
  
  })

  const handleInput = (e)=>{
    const value = e.target.value;
    setInputValue({...inputValue, [e.target.name]:value})
}


  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      phoneNumber: e.currentTarget.phoneNumber.value,
      code: e.currentTarget.code.value,
      date: new Date()
    };
   try{
     const res = await fetch(`/api/posts`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if(res.status==200||res.status==201){setErrMsg("updated successfully")}
  }
  catch(err){
    setErrMsg("An error occured, pls check your internet connection and try again")
  }

  }

  return(

  <div>
    <Head/>
   
    <div id="main-content" className="animate-bottom container"  >
    <h2 style={{padding: '20px 0'}}>Enter code to continue</h2>
  
    {errMsg && <div className="alert alert-success">
    <strong>{errMsg}</strong>
    </div>
  }
    <form onSubmit={handleSubmit} encType="multipart/form-data">
    
  
      <div className="form-group">
        <label htmlFor="phoneNumber">Image link</label>
        <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={inputValue.phoneNumber} onChange={handleInput}/>
      </div>
  
      <div className="form-group">
        <label htmlFor="code">code :</label>
        <input type="text" className="form-control" id="code" name="code" value={inputValue.code} onChange={handleInput}/>
      </div>
  
     
      <button type="submit" className="btn btn-primary">Submit</button>
  
    </form>
  </div>
  
      

  </div>
   ) 
    
}

export default Update;
