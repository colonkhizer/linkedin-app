import { Avatar } from '@material-ui/core'
import React , {forwardRef} from 'react'
import InputOption from './InputOption'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import './Post.css'

const Post  = forwardRef(({
    name,
    desc,
    message,
    photoURL
} , ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoURL}/>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{desc}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpIcon} title="Like" color="gray" />
                <InputOption Icon={ChatIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareIcon} title="Share" color="gray" />
                <InputOption Icon={SendIcon} title="Send" color="gray" />
            </div>
        </div>
    )
})

export default Post
