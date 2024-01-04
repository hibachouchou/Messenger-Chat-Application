import React ,{useState,useRef ,useEffect}from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

export const Chats = () => {

  const navigate = useNavigate();
  const {user}=useAuth()
  console.log(user.email,user.uid)
  const [Loading,setLoading]=useState(true)


  const handleLougout= async()=>{
    await auth.signOut()
    navigate('/')
    }


    const getFile = async (url)=>{
    const response = await fetch(url);
    const data= await response.blob()
    return new File([data],"userPhoto.jpg",{type:'img/jpeg'})
    }

useEffect(()=>{
if(!user) {navigate('/') }
axios.get('https://api.chatengine.io/users/me/', {
  headers: {
    "Project-ID":import.meta.env.VITE_CHAT_ENGINE_ID ,
    "User-Name": user.email,
    "User-Secret": user.uid,
  }
})
.then((response)=>{
  console.log(response)
  setLoading(false)
})
.catch((error)=>{
  console.error("Error fetching user data:", error);
  let formdata= new FormData();
  formdata.append('email',user.email)
  formdata.append('username',user.email)
  formdata.append('secret',user.uid)
  getFile(user.photoURL)
  .then((avatar)=>{
    formdata.append('avatar',avatar,avatar.name)
    axios.post(
    "https://api.chatengine.io/users/",
    formdata,
    {
      headers:
      {"private-key":import.meta.env.VITE_CHAT_ENGINE_KEY}
    }
    )
    .then((response) => {
      console.log("User creation response:", response);
      setLoading(false);
    })
    .catch((error) => console.error("Error creating user:", error));
  })
})

},[user,navigate])

if(!user || Loading) return <h2>Loading ...</h2>
  return (
    <div>
      <div className='chats-page'>
        <div className='nav-bar'>
          <div className='logo-tab'>Messenger Application</div>
          <div onClick={handleLougout} className='logout-tab'>Logout</div>
        </div>
        <ChatEngine
        height="calc(100vh -66px)"
        projectID="b26441ed-1bff-4b27-b854-af4dee0d13a9"
        userName={user.email}
        userSecret={user.uid}
        />
      </div>
    </div>
  )
}
