import React, { useEffect, useState } from 'react'
import MessageSender from '../MessageSender.js/MessageSender';
import Post from '../Post/Post';
import StoryReel from '../StoryReel/StoryReel';
import './Feed.css';
import '../../Firebase'
import db from '../../Firebase';

function Feed() {
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    db.collection("posts").onSnapshot((snapshot)=>
    setPosts(snapshot.docs.map((doc)=>({
      id:doc.id,data:doc.data()
    })))
    )
  })
  return (
    <div className='feed'>
     <StoryReel />
     <MessageSender />
     
    {
      posts.map((post)=>(
        <Post 
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))
    }
     
    </div>
  )
}

export default Feed