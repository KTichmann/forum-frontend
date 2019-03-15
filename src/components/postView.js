import React from 'react';
import moment from 'moment';
import Avatars from '@dicebear/avatars';
import sprites from '@dicebear/avatars-male-sprites';
import likesIcon from '../images/likes.png';
import deleteIcon from '../images/delete.png';
import ReactMarkdown from 'react-markdown';

const PostView = (props) => {
    let options = {}
    let avatars = new Avatars(sprites(options));
    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '32px', color: 'rgba(17,28,121, .6)' }}>{props.post.title}</h1>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%' }} dangerouslySetInnerHTML={{ __html: avatars.create(props.post.username) }}></div>
                <div style={{ marginLeft: '25px' }}>
                    <div style={{ paddingTop: '10px', fontFamily: 'Ubuntu', fontSize: '16px', fontWeight: '600', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            {props.post.username} <span style={{fontSize: '16px', fontWeight: '400', color: 'rgba(0,0,0,.6)', marginLeft: '10px' }}>{moment(props.post.created_at).fromNow()}</span>
                        </div>
                        <div style={{ display: "flex" }}>
                            <span style={{ marginRight: "8px", cursor: "pointer" }}>{props.postLikes}</span><img alt="likes" onClick={props.handleLike} style={{width: '20px', height: '20px', marginTop: "1px", cursor: "pointer"}} src={likesIcon}/>
                            <img alt="delete" style={{width: '20px', height: '20px', marginTop: "1px", display: props.delete ? 'inline-block' : 'none'}} src={deleteIcon}/>
                        </div>
                    </div>
                    <div style={{  margin: '10px', marginLeft: '12px', fontFamily: 'Ubuntu', fontSize: '16px', width: '800px', position: "relative" }}>
                        <span id="post-content"><ReactMarkdown source={props.post.post} /></span>
                        <span style={{ right: "0px", bottom: "0px", position: "absolute", color: "rgba(17, 28, 121, 0.6)", cursor: "pointer", fontWeight: "600", display: props.userCanEdit ? "block" : "none" }} onClick={() => props.handleEdit ? props.handleEdit() : false}>{props.editText}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostView;