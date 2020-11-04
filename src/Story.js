import { Avatar } from '@material-ui/core';
import React from 'react';
import './Story.css';
import Zoom from 'react-reveal/Zoom';

function Story({image, profileSrc, title }) {
    return (
        <Zoom left>
        <div style={{backgroundImage: `url(${image})`}} className='story'>
            <Avatar src={profileSrc}/>
            <h4>{title}</h4>
        </div>
        </Zoom>
    )
}


export default Story
