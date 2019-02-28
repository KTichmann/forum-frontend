import React from 'react';
import moment from 'moment';
import Avatars from '@dicebear/avatars';
import sprites from '@dicebear/avatars-male-sprites';

const PostView = (props) => {
    let options = {}
    let avatars = new Avatars(sprites(options));

    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '32px', color: 'rgba(17,28,121, .6)' }}>{props.post.title}</h1>
            <div style={{ display: 'flex' }}>
                <div style={{width: '40px', height: '40px', borderRadius: '50%'}} dangerouslySetInnerHTML={{__html: avatars.create(props.post.username)}}></div>
                <div style={{ marginLeft: '25px' }}>
                    <div style={{ paddingTop: '10px', fontFamily: 'Ubuntu', fontSize: '16px', fontWeight: '600' }}>{props.post.username} <span style={{fontSize: '16px', fontWeight: '400', color: 'rgba(0,0,0,.6)', marginLeft: '10px' }}>{moment(props.post.created_at).fromNow()}</span></div>

                    <div style={{  margin: '10px', marginLeft: '12px', fontFamily: 'Ubuntu', fontSize: '16px', width: '800px' }}>
                        {props.post.post}
                    </div>
                </div>
            </div>
            <p>{props.postLikes}</p>
        </div>
    )
}

export default PostView;