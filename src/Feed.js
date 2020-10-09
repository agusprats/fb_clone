import React, { useState, useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
db.collection('posts')
    .orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) =>
    setPosts(snapshot.docs.map((doc) =>
    ({
        id: doc.id,
        data: doc.data()
    })))
);
    }, [])

    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
            <Post key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
            />

            ))}

{/*
            <Post
            profilePic={'https://avatars2.githubusercontent.com/u/59830072?s=60&v=4'}
            message='Chocolate cupcake without eggs...'
            timestamp='this is a timestamp'
            username='APP'
            image='https://okdiario.com/img/2018/10/17/cupcake-de-chocolate-sin-huevo.jpg'
            />
*/}

        </div>
    )
}

export default Feed
