import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import './Post.css';
import {ExpandMoreOutlined}  from '@material-ui/icons';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import  NearMeIcon from '@material-ui/icons/NearMe';
import  ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Fade from 'react-reveal/Fade';


function Post({profilePic, image, username, timestamp, message, contarClics}) {

    const [ clics, setClics] = useState(0)

    const  contarClicks = () => {
        setClics(clics + 1)
        console.log(clics)
    }

    return (
        <Fade left>
        <div className='post'>
            <div className="post__top">
                <Avatar src={profilePic}
                className='post__avatar'/>

                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt=''/>
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon 
                    onClick={contarClicks}
                    
                    />
                    <div>{clics}</div>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                 </div>
            </div>
        </div>
        </Fade>
    );
}

export default Post
