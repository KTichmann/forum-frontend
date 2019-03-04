import React from "react";
import Layout from "../components/layout";
import PostView from "../components/postView";
import NoPostView from "../components/noPostView";
import ContentList from "../components/contentList";
import "../components/loader.css";
import "../components/post.css";

class PostPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            post: false,
            comments: [],
            commentLikes: [],
            postLikes: 0,
            postExists: true
        }

        this.likeHandler = this.likeHandler.bind(this);
        this.getCommentData = this.getCommentData.bind(this);
        this.formatComments = this.formatComments.bind(this);
    }

    componentWillMount(){
        if(this.props.location.state){
            this.post_id =  this.props.location.state.post_id;
        } else{
            this.setState({
                postExists: false
            })
        }

        this.getPostData();
        this.getCommentData();
        this.getPostLikes();
    }

    getPostData(){
        const url = `https://ktichmann-forum-api.herokuapp.com/posts/${this.post_id}`;

        fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.success){
                this.setState({
                    post: res.data[0]
                })
            } else {
                this.setState({
                    postExists: false
                })
            }
        })
    }

    getCommentData(){
        const url = `https://ktichmann-forum-api.herokuapp.com/comments/${this.post_id}`

        fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.success){
                this.setState({
                    comments: res.data
                })

                this.getCommentLikes();
            } else {
                //TODO: handle error
            }
        })
        .catch(error => {
            console.log(error)
            //TODO: handle error somehow
        })
    }

    getCommentLikes(){
        let comments = this.state.comments.map(commentObj => commentObj.comment_id)
        let commentString = comments.join('&')
        const url = `https://ktichmann-forum-api.herokuapp.com/likes/comments/${commentString}`
        fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.success){
                this.setState({
                    commentLikes: res.data
                })
            } else {
                //TODO: handle error
            }
        })
        .catch(error => {
            console.log(error)
            //TODO: handle error
        })
    }

    getPostLikes(){
        const url = `https://ktichmann-forum-api.herokuapp.com/likes/posts/${this.post_id}`

        fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.success){
                this.setState({
                    postLikes: res.data.length > 0 ? res.data[0].count : 0
                })
            } else {
                //TODO: handle error
            }
        })
        .catch(error => {
            console.log(error)
            //TODO: handle error
        })
    }

    likeHandler(id){
        let likes = document.getElementById(id).querySelector(`.likes`)
        if(sessionStorage.getItem('token')){
            if(likes.classList.contains('likeAdded')){
                likes.classList.remove('likeAdded');

                const url = "https://ktichmann-forum-api.herokuapp.com/likes/remove"
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': sessionStorage.getItem('token')
                    },
                    body: `type=comment&id=${id}`
                })
                .then(res => res.json()).then(res => {
                    this.setState(prevState => ({
                        commentLikes: prevState.commentLikes.map(likeObj => {if(likeObj.id === id){return {...likeObj, count: parseInt(likeObj.count) - 1}} else { return likeObj }})
                    }))
                })
                .catch(error => console.log(error) 
                    //TODO: Handle error
                )
            } else{
                likes.classList.add('likeAdded');
                const url = "https://ktichmann-forum-api.herokuapp.com/likes/add"
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': sessionStorage.getItem('token')
                    },
                    body: `type=comment&id=${id}`
                })
                .then(res => res.json()).then(res => {
                    if(res.success){
                        this.setState(prevState => ({
                            commentLikes: prevState.commentLikes.map(likeObj => {if(likeObj.id === id){return {...likeObj, count: parseInt(likeObj.count) + 1}} else { return likeObj }})
                        }))
                    }
                })
                .catch(error => console.log(error) 
                    //TODO: Handle error
                )
            }
        }
    }

    formatComments(commentArr){
        return commentArr.map(commentObj => {
            return <ContentList id={commentObj.comment_id} content={commentObj.comment} username={commentObj.username} date={commentObj.created_at} likeHandler={this.likeHandler} likes={ this.state.commentLikes.filter(obj => obj.id == commentObj.comment_id)[0].count }/>
        })
    }

    render(){
        return(
            <Layout>
                { this.state.post ? (this.state.postExists ? 
                <PostView post={this.state.post} commentLikes={this.state.commentLikes} postLikes={this.state.postLikes} /> : 
                <NoPostView />) : <div className="loader">Loading...</div> }
                { (this.state.commentLikes.length > 0) ? this.formatComments(this.state.comments) : false}
            </Layout>
        )
    }
}

export default PostPage;