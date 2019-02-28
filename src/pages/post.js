import React from "react";
import Layout from "../components/layout";
import PostView from "../components/postView";
import NoPostView from "../components/noPostView";

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
        // this.getPostLikes();
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
            }
            //TODO: else block & catch errors
        })
    }



    render(){
        return(
            <Layout>
                {this.state.postExists ? <PostView /> : <NoPostView />}
            </Layout>
        )
    }
}

export default PostPage;