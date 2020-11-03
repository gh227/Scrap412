import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCurrentUser } from '../../lib/hooks';
import Head from '../../components/Head'
import Nav from '../../components/Nav'

export default function Verify(){

    useEffect(() => {
        async()=>{
            await fetch('/api/user/email/verify', {
              method: 'POST',
            });
          }
    }, [])

    async function sendVerificationEmail(e) {
        e.preventDefault();
        console.log('somte')
        await fetch('/api/user/email/verify', {
          method: 'POST',
        });
      }

return(
  <div>
    <Head/>
    <Nav/>
      <div id="main-container" className="main-container">
        <div className="content-container">
            
            <div id="page-contents"  >
                  <div className="card-body" style={{color: "#595959", fontSize: "18px"}}>
                      <p>Before proceeding, please check your email for a verification link.</p>
                      <p> If you did not receive the email, click button below to request for another</p> 
                    <form onSubmit={sendVerificationEmail} id="email_verify_resend">
                      <button id="resend_verify" className="btn btn-primary" type="submit">Resend Email
                      </button>
                    </form>
                  </div>  
            </div>
          </div>
      </div>
  </div>        
        )
}