import { Button } from '@mui/material'
import React from 'react'
import './Login.css';
import {auth,provider} from '../../Firebase'

import {actionTypes} from '../../reducer'
import { useStateValue } from '../../StateProvider';
function Login() {
const [state,dispatch]=useStateValue();


 const signInWithGoogle= () =>{
   auth. signInWithPopup(provider).then((result) =>{
     dispatch({
      type:actionTypes.SET_USER,
      user:result.user,
     })
     console.log(result.user);
    }).catch((error)=>alert(error.message))
  }
  return (
    <div className='login'>
     <div className='login__logo'>
     <img 
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
      alt='logo'
     />
     <img 
        src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
       alt='logo'

     />
     
     </div>
     <Button type='submit' onClick={signInWithGoogle} >
       SignIn with Google
     </Button>
    </div>
  )
}

export default Login