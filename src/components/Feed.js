import {useState, useEffect} from "react";
import "./feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import {db} from './firebase';
import Flipmove from "react-flip-move";

function Feed(){
    const[posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return(
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <Flipmove  />
            {posts.map(post => (
                <Post 
                key={post.text}
                displayName = {post.displayName}
                username=  {post.username}
                verified={post.verified}
                text={post.text}
                />

            ))}
          
        </div>

    )
}

export default Feed;