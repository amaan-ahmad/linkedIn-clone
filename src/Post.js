import React from 'react'
import './Post.css'
import InputOption from "./InputOption"

import { Avatar } from '@material-ui/core'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'

function Post({ name, description, message, photoUrl }) {

    return (
        <div className='post'>
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption
                        title ='Like'
                        Icon = {ThumbUpAltOutlinedIcon}
                        color = 'gray' />

                <InputOption
                        title ='Comment'
                        Icon = {ChatOutlinedIcon}
                        color = 'gray' />

                <InputOption
                        title ='Share'
                        Icon = {ShareOutlinedIcon}
                        color = 'gray' />
                <InputOption
                        title ='Send'
                        Icon = {SendOutlinedIcon}
                        color = 'gray' />
            </div>
        </div>
    )
}

export default Post