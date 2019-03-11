import React from "react";
import moment from 'moment';
import Layout from "../../components/layout";
import PostView from "../../components/postView";
import NoPostView from "../../components/noPostView";
import ContentList from "../../components/contentList";
import Input from "../../components/input"

import "../../components/loader.css";
import "../../components/post.css";

class PostPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            post: false,
            comments: [],
            commentLikes: [],
            postLikes: 0,
            postExists: true,
            editing: false,
            editingComment: false
        }

        this.likeHandler = this.likeHandler.bind(this);
        this.getCommentData = this.getCommentData.bind(this);
        this.formatComments = this.formatComments.bind(this);
        this.handleAddComment = this.handleAddComment.bind(this);
        this.editPost = this.editPost.bind(this);
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
        console.log("mounting")
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
                const sortedComments = res.data.sort((first, second) => {
                    return moment(second.created_at).isBefore(moment(first.created_at)) ? 1 : -1;
                  })
                this.setState({
                    comments: sortedComments
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
        console.log(id)
        let likes = document.getElementById(id).querySelector(`.likes`)
        if(sessionStorage.getItem('token')){
            if(likes.classList.contains('likeAdded')){
                likes.classList.remove('likeAdded');

                const url = "https://ktichmann-forum-api.herokuapp.com/likes/remove";

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
            } else {
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
                        this.setState(prevState => {
                            let commentLikes;
                            console.log(prevState.commentLikes)
                            if(prevState.commentLikes.filter(obj => obj.id === id).length > 0){
                                commentLikes = prevState.commentLikes.map(likeObj => {if(likeObj.id === id){return {...likeObj, count: parseInt(likeObj.count) + 1}} else { return likeObj }})
                            } else {
                                commentLikes = [...prevState.commentLikes, {id: id, count: 1}]
                            }
                            return {
                                commentLikes: commentLikes
                            }
                        })
                    }
                })
                .catch(error => console.log(error) 
                    //TODO: Handle error
                )
            }
        }
    }

    formatComments(commentArr){
        const editStyle = {
            bottom: '0%',
            right: '5%',
            fontFamily: 'Ubuntu, sans-serif',
            position: 'absolute',
            color: 'rgba(17, 28, 121, 0.6)',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '.85rem'
        }

        return commentArr.map(commentObj => {
            let commentLikes = this.state.commentLikes.filter(obj => obj.id == commentObj.comment_id);
            return <div id={`comment-${commentObj.comment_id}`} style={{position:"relative"}}>
                        <ContentList id={commentObj.comment_id} content={commentObj.comment} username={commentObj.username} date={commentObj.created_at} likeHandler={this.likeHandler} likes={ commentLikes.length > 0 ? commentLikes[0].count : 0 } />
                        {window.sessionStorage.getItem('for-mUsername') === commentObj.username ? <span className='comment-edit' style={editStyle} onClick={() => { this.editComment(commentObj.comment_id) }}>Edit</span> : false}
                        {
                            this.state.editingComment ? <span className='comment-delete' style={{...editStyle, right: '6rem'}} onClick={() => {this.deleteComment(commentObj.comment_id)}}>Delete</span> : false
                        }
                    </div>
        })
    }

    editComment(commentId){
        //hide all other edit buttons
        if(this.state.editingComment){
            //edit the comment using a fetch request
            let url = `https://ktichmann-forum-api.herokuapp.com/comments/edit`
            let comment = document.querySelector(`#comment-${commentId} textarea`).value
            
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': sessionStorage.getItem('token')
                },
                body: `id=${commentId}&comment=${comment}`
            })
            .then(res => res.json())
            .then(res => {
                if(res.success){
                    // this.getCommentData();
                    window.location.reload();
                }
            })
            .catch(err => console.log(err))
            //refresh comments
        } else {
            document.querySelectorAll('.comment-edit').forEach(val => {
                val.style.display = "none";
            })
            let commentData = this.state.comments.filter(commentObj => commentObj.comment_id === commentId)[0].comment;

            document.querySelector(`#comment-${commentId} .comment-edit`).style.display = "inline"
            document.querySelector(`#comment-${commentId} .content`).innerHTML = `<textarea style='width: 100%; height: 100px; resize: none; font-size: .8rem' >${commentData}</textarea>`
            document.querySelector('.comment-edit').innerHTML = 'Update'
            this.setState({ editingComment: true });
        }
    }

    deleteComment(id){
        document.querySelector(`body`).innerHTML += `
            <div class="deleteConfirmation" style="position: fixed; top: 40%; left: 50%; transform: translateX(-50%); background-color: rgba(100, 100, 255, 1); padding: 2rem; border-radius: 5px; box-shadow: 1px 1px 1px 1px rgba(0,0,0,.5); font-family: Ubuntu">
                <div style="margin-bottom: 1rem">Are you sure you want to delete?</div>
                <div style="display: flex; justify-content: space-around;">
                    <button style="padding: 5px 20px; border-radius: 4px; border: none; box-shadow: 2px 2px 2px 2px rgba(0,0,0,.3); background-color: #4BB543; width: 40%" id="keepButton">Keep</button>
                    <button style="padding: 5px 20px; border-radius: 4px; border: none; box-shadow: 2px 2px 2px 2px rgba(0,0,0,.3); background-color: #FF2323; width: 40%" id="deleteButton">Delete</button>
                </div>
            </div>
        `

        document.getElementById('keepButton').addEventListener('click', () => {
            document.querySelector('.deleteConfirmation').remove();
        })
    }

    handleAddComment(e, val){
        let addCommentUrl = `https://ktichmann-forum-api.herokuapp.com/comments/create`
        //check to make sure val isn't empty:
        if(val){
            //add the comment to the db on the server via fetch request
            fetch(addCommentUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': sessionStorage.getItem('token')
                },
                body: `post_id=${this.post_id}&comment=${val}`
            })
            .then(res => {
                return res.json();
            })
            .then(res => {
                if(res.success){
                    this.getCommentData();
                }
            })
        }
        //update the comment list - with another fetch request to comments
    }

    editPost(){
        if(!this.state.editing){
            this.setState({editing: true})
            document.querySelector("#post-content").innerHTML = `
            <textArea style="width: 100%; height: 50vh; margin-bottom: 2rem; padding: 5px; border: none; box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 4px 0px; font-family: Ubuntu, sans-serif; resize: none;">${this.state.post.post}</textArea>`
        } else {
            //Make a fetch request to the server to update the post
            let post = document.querySelector("#post-content textarea").value;
            let url = `https://ktichmann-forum-api.herokuapp.com/posts/edit`

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': sessionStorage.getItem('token')
                },
                body: `title=${this.state.post.title}&post=${post}&id=${this.post_id}`
            })
            .then(res => res.json())
            .then(res => {
                console.log(`id=${this.post_id}&title=${this.state.post.title}&post=${post}`)
                if(res.success){
                    //Refresh the page
                    window.location.reload();
                }
            })
            .catch(error => console.log(error))
        }
    }
    
    render(){
        return(
            <Layout>
                { this.state.post ? (this.state.postExists ? 
                <PostView post={this.state.post} commentLikes={this.state.commentLikes} postLikes={this.state.postLikes} userCanEdit={window.sessionStorage.getItem("for-mUsername") === this.state.post.username} handleEdit={this.editPost} editText={ this.state.editing ? "Submit" : "Edit" }/> : 
                <NoPostView />) : <div className="loader">Loading...</div> }
                { this.formatComments(this.state.comments) }
                { sessionStorage.getItem('token') ? <Input id={`post-${this.post_id}`} buttonValue="Comment" handleSubmit={this.handleAddComment} /> : <Input handleSubmit={() => window.location.replace('/log-in')} buttonValue="Log in" textValue="Log in to comment" textAreaStyle={{pointerEvents: "none", backgroundColor: "rgba(0,0,0,.1)", padding: "1rem 1.5rem", color: "rgba(0,0,0,.6)"}}/>}
            </Layout>
        )
    }
}

export default PostPage;