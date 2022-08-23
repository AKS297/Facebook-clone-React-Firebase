import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
function Post({profilePic,image,username,timestamp,message}) {
  return (
    <div className='post'>
   <div className='post__top'>
   <Avatar src={profilePic} className='post__avatar' />
   <div className='post__topInfo'>
   <h3>{username}</h3>
   <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
   </div>
   </div>

<div className='post__bottom'>
<p className='message'>{message}</p>
<div className='post__image'>
<img src={image} alt=''/>
</div>
<div className='post__options'>
<div className='post__option'>
<ThumbUpIcon />
<p>Like</p>
</div>
<div className='post__option'>
<ChatBubbleOutlineIcon />
<p>Comment</p>
</div>
<div className='post__option'>
<NearMeIcon />
<p>Share</p>
</div>
<div className='post__option'>
<AccountCircleIcon />
<ExpandMoreOutlined />

</div>
</div>
</div>



    </div>
  )
}

export default Post