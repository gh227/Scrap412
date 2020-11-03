import Head from '../../components/Head'
import React, {useState, useEffect} from 'react'
import { useCurrentUser } from '../../lib/hooks';
import Loader from '../../components/Loader'
import {useRouter} from 'next/router'
import NotFound from '../404'


const CreatePost=()=>{
  const [errMsg, setErrMsg] = useState('')
  const [inputValue, setInputValue] = useState({phoneNumber:''})
  const [user] = useCurrentUser();
  const [loading, setLoading] = useState(true)
  const router = useRouter();
useEffect(() => {
    if(user && !user.admin) {
      router.push('/404')

    }
     if(user === null){
       router.push('/404')
    }
    
  }, [user])

  const handleInput = (e)=>{
    const value = e.target.value;
    setInputValue({...inputValue, [e.target.name]:value})  
}

  async function handleSubmit(e){
    e.preventDefault();
    const body = {
      phoneNumber: e.currentTarget.phoneNumber.value,
      code: '',
      date: new Date()
    };
   try{
     const res = await fetch(`/api/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if(res.status==200||res.status==201){setErrMsg("Number added  successfully")}
  }
  catch(err){
    setErrMsg("An error occured, pls check your internet connection and try again")
  }
  
      
    
    // revalidate the `post-pages` key in usePostPages
    //revalidate();
    // Perhaps show a dialog box informing the post has been posted
    
  }

  return(
  
 <div>
    <Head/>   
<div id="main-content" className="animate-bottom container"  >
  <h2 style={{padding: '20px 0', textAlign:'center'}}>NEW NUMBER</h2>

  {errMsg && <div className="alert alert-success">
  <strong>{errMsg}</strong>
  </div>
}
  <form className="mb-4" onSubmit={handleSubmit} encType="multipart/form-data">


    <div className="form-group">
      <label htmlFor="phoneNumber">phone Number</label>
      <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={inputValue.phoneNumber} onChange={handleInput}/>
    </div>


    
    <button type="submit" className="btn btn-primary">Submit</button>

  </form>
</div>
</div>
) 
}

export default CreatePost