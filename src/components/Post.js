import './post.css';
import {Avatar} from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from '@mui/icons-material/Repeat';
import  PublishIcon from '@mui/icons-material/Publish';
import {forwardRef} from "react";

const Post= forwardRef( (({displayName,username,verified,text}, ref) =>
    {
    return(
        <div className='post' ref={ref}>
            <div className='post__avatar'>
                <Avatar />
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>{displayName}{" "}
                             <span className='post__headerSpecial'>
                            {verified && <VerifiedUserIcon className='post__badge' />}@{username}
                            </span>
                        </h3>
                    </div>
                <div className='post__headerDescription'>
                    <p>{text}</p>
                </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g data-name="Glyph"><path d="M22 2a8.011 8.011 0 0 0-8 8v26.52a14 14 0 1 0 16 0V10a8.011 8.011 0 0 0-8-8Zm12 46a12 12 0 1 1-18.46-10.1 1 1 0 0 0 .46-.84V10a6 6 0 0 1 12 0v27.06a1 1 0 0 0 .46.84A11.948 11.948 0 0 1 34 48Z"/><path d="M26 38.7V10a4 4 0 0 0-8 0v28.7l-1.38.88a10 10 0 1 0 10.76 0zM18 44a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm4 10a6.019 6.019 0 0 1-5.93-5.11 1 1 0 0 1 1.97-.29A4.035 4.035 0 0 0 22 52a1 1 0 0 1 0 2zm2-41h-1a1 1 0 0 0 0 2h1v4h-1a1 1 0 0 0 0 2h1v4h-1a1 1 0 0 0 0 2h1v2h-4V10a2 2 0 0 1 4 0zm16.48 21.51a10.891 10.891 0 0 0 11.09-.11 3 3 0 1 0-3.1-5.13c-3.066 2.01-7.749-.589-7.61-4.27-.137-3.673 4.5-6.277 7.58-4.28a3 3 0 0 0 3.07-5.16 10.965 10.965 0 1 0-11.03 18.95z"/><circle cx="38" cy="11" r="3"/></g></svg>
            <div className='post__footer'>
                <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
            </div>
            </div>
        </div>
    )
}));

export default Post;