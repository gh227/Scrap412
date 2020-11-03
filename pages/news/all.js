import Head from '../../components/Head'
import Header from 'next/head'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import React, {useState,useEffect} from 'react'
import fetching from 'node-fetch'
import Link from 'next/link'
import Loader from '../../components/Loader'


const All =(props)=>{
    const {post} = props;
    console.log(post);
    return(                  
            <tr className='table-light'>
                <td>{post.phoneNumber}</td>
                <td>
                <Link href="/posts/[_update]" as={`/posts/${post._id}`}>
                    <a className="btn btn-success">Edit</a>
                </Link>
                </td>
                <td><form onSubmit={props.submit} >
                <input type="hidden" id="post_id" value={post._id} name="post_id" />
                <button className="btn btn-success" type="submit" >delete</button>
                </form>
                </td>
            </tr>
        )
}
const fetcher =async (url)=>{const r = await fetching(url)
    return r.json()}

function dismissAlert(e){
       document.querySelector('.alert').style.display = 'none'
  }

function Index () {
   const [data, setData] = useState({posts:[]})
    const [msg, setMsg] = useState('')
    useEffect(()=>{
       async function getData(){
         await fetcher(`/api/posts`).then((data)=>{
            setData(data)
         })
         .catch((err)=>{
             console.log(err)
         })
       }
      getData()
     },[])

    const submitHandler = async(e)=>{
        e.preventDefault();
        const body = {post_id : e.currentTarget.post_id.value}
        const res = await fetch(`/api/posts`, {
         method: 'DELETE',
         headers:{'Content-Type':'application/json'}, 
         body:JSON.stringify(body)
     });
     if(res.status ===200){
         console.log('working')
         setMsg("one document deleted");
     }
    }
    
const allObj = data.posts.map((post)=><All key={post._id} post={post} submit={submitHandler}/>)
   
return (  
        <div>
            <Header>
                <link rel="stylesheet" type="text/css" href="/lib/bootstrap/css/bootstrap.min.css"/>
                <link href="/css/all.css" rel="stylesheet"/>
            </Header>
           
            <div className="container">
                <h1>All Posts</h1>
                {msg &&
                    <div className="alert alert-danger alert-dismissible fade show">
                    <button type="button" className="close" data-dismiss="alert" onClick={dismissAlert}>&times;</button>
                    <strong>{msg}</strong>
                </div>
                }
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th>Captions</th>
                            <th>Edit</th>
                            <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {allObj}
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
    )
  }
export default Index