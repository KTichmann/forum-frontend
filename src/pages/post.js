import React from "react";
import Layout from "../components/layout";
import PostView from "../components/postView";
import NoPostView from "../components/noPostView";
import ContentList from "../components/contentList"
class PostPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            post: {},
            comments: [],
            commentLikes: [],
            postLikes: 0,
            postExists: true
        }
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
        this.getCommentLikes();
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
        const url = `https://ktichmann-forum-api.herokuapp.com/likes/comments`

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
        const url = `https://ktichmann-forum-api.herokuapp.com/likes/posts`

        fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.success){
                let postLikeObj = res.data.filter(obj => obj.id === this.post_id);
                this.setState({
                    postLikes: postLikeObj[0].count
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

    formatComments(commentArr){
        return commentArr.map(commentObj => {
            return <ContentList id={commentObj.comment_id} content={commentObj.comment} username={commentObj.username} date={commentObj.created_at}/>
        })

        /* 
            "comment_id": 1,
            "comment": "First!",
            "username": "bobby",
            "post_id": 1,
            "created_at": "2019-02-25T16:46:09.992Z"
        */
    }

    render(){
        return(
            <Layout>
                {this.state.postExists ? 
                <PostView post={this.state.post} commentLikes={this.state.commentLikes} postLikes={this.state.postLikes} /> : 
                <NoPostView />}
                { this.formatComments(this.state.comments) }
            </Layout>
        )
    }
}

export default PostPage;