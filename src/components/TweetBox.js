import { useState } from 'react';
import './tweetbox.css';
import {Avatar,Button} from "@mui/material";
import {db} from './firebase';


 function TweetBox(){
    const [tweetMessage, setTweetMessage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: "Lighty",
            username: "Miki",
            verified: true,
            text: tweetMessage
        });

        setTweetMessage("");
    };

    return(
        <div className="tweetbox">
            <form>
                <div className='tweetbox__input'>
                    <Avatar />
                    <input
                    onChange={(e) => setTweetMessage(e.target.value)} 
                    value={tweetMessage} placeholder="What's happening?"></input>
                </div> 
                <div>
                    <input className='tweetBox__imageInput' placeholder='Optional : Enter image url' type='text'></input>
                </div>
                <Button onClick={sendTweet} type="submit" className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
 }

 export default TweetBox;