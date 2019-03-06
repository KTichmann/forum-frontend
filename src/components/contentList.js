import React from 'react';
import moment from 'moment';
import Avatars from '@dicebear/avatars';
import sprites from '@dicebear/avatars-male-sprites';
import commentIcon from '../images/comments.png';
import likesIcon from '../images/likes.png';

import './contentList.css';

let options = {};
let avatars = new Avatars(sprites(options));

const ContentList = (props) => {
    const mainStyles = {
        display: 'flex',
        justifyContent: 'space-around',
    }

    return (
        <div id={props.id} className={`content ${props.hover ? 'hover' : ''}`} style={mainStyles}>
            <div style={{paddingLeft: '10px', display: 'flex', flexDirection: 'row'}}>
                <div style={{width: '40px', height: '40px', borderRadius: '50%'}} dangerouslySetInnerHTML={{__html: avatars.create(props.username)}}></div>
                <div style={{flexDirection: 'column', marginLeft: '25px'}}>
                    {props.title ? 
                        <div className="title">
                            {props.title}
                        </div> 
                        : false
                    }
                    <div className="time"> 
                        {`${props.username} `}
                        {moment(props.date).fromNow()}
                    </div>
                    <div className="mainContent">
                        {props.content}
                    </div>
                </div>
            </div>
            <div className="likes" style={{display: 'flex', flexDirection: 'row'}} onClick={() => props.likeHandler ? props.likeHandler(props.id) : false}>
                {props.commentCount ? 
                    [
                        <div style={{fontSize: '14px', fontWeight: '600', marginRight: '10px', fontFamily: 'Ubuntu', marginTop: '-2px'}}>
                            {props.commentCount}
                        </div>, 
                        <img alt='comments' className="likeImg" style={{width: '20px', height: '20px'}} src={commentIcon}/>
                    ] : false
                }
                <div style={{fontSize: '14px', fontWeight: '600', marginLeft: '20px', marginRight: '10px', fontFamily: 'Ubuntu', marginTop: '-2px'}}>
                    {props.likes ? props.likes : 0}
                </div>
                <img alt="likes" className="likeImg" style={{width: '20px', height: '20px'}} src={likesIcon}/>
            </div>
        </div>
)}

export default ContentList;