import React from 'react';
import moment from 'moment';
import Avatars from '@dicebear/avatars';
import sprites from '@dicebear/avatars-male-sprites';
import commentIcon from '../images/comments.png';
import likesIcon from '../images/likes.png';

import { Link } from 'gatsby'; 

import './postList.css';

let options = {};
let avatars = new Avatars(sprites(options));

const PostList = (props) => {
    const mainStyles = {
        display: 'flex',
        justifyContent: 'space-around',
        textDecoration: 'none'
    }
    return (
        <Link to={`/post`} state={{post_id: props.id}} className="post" style={mainStyles}>
            <div style={{paddingLeft: '10px', display: 'flex', flexDirection: 'row'}}>
                <div style={{width: '40px', height: '40px', borderRadius: '50%'}} dangerouslySetInnerHTML={{__html: avatars.create(props.username)}}></div>
                <div style={{flexDirection: 'column', marginLeft: '25px'}}>
                    <div className="title">{props.title}</div>
                    <div className="time">by {props.username} {moment(props.date).fromNow()}</div>
                    <div className="postContent">{props.post.substring(0, 175)}</div>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{fontSize: '14px', fontWeight: '600', marginRight: '10px', fontFamily: 'Ubuntu', marginTop: '-2px'}}>{props.commentCount}</div>
                <img alt="comments" style={{width: '20px', height: '20px'}} src={commentIcon}/>
                <div style={{fontSize: '14px', fontWeight: '600', marginLeft: '20px', marginRight: '10px', fontFamily: 'Ubuntu', marginTop: '-2px'}}>{props.likes}</div>
                <img alt="likes" style={{width: '20px', height: '20px'}} src={likesIcon}/>
            </div>
        </Link>
)}

export default PostList;