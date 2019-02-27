import React from 'react';
import moment from 'moment';
import './postList.css'

const PostList = (props) => {

    const mainStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2rem',
        border: '1px solid rgba(0,0,0,.4)',
        borderRadius: '5px',
        marginBottom: '3rem'
    }
    return (
    <div className="post" style={mainStyles}>
        <div style={{flexDirection: 'column'}}>
            <div className="title">{props.title}</div>
            <div>by {props.username} {moment(props.date).fromNow()}</div>
        </div>
        <div>
            <div>{props.commentCount}</div>
            <div>Comment{props.commentCount == 1 ? false : 's'}</div>
        </div>
    </div>
)}

export default PostList;