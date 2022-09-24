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
               <img src="https://th.bing.com/th/id/OIP.xCJSeJFRUsF2ZAf2ETpQiwHaEK?pid=ImgDet&rs=1"></img>
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