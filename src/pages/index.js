import React from "react"
import { Link } from "gatsby"
import PostList from '../components/postList'
import Layout from "../components/layout"
class IndexPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      auth: '',
      comments: [],
      data: [],
      likes: []
    }
  }

  componentWillMount(){
    this.setPosts();
    this.getComments();
    this.getLikes();

    this.setState({
      auth: window.sessionStorage.getItem('token')
    })
  }

  getLikeCount(post_id, arr) {
    const filteredArr = arr.filter(obj => obj.id === post_id)
    if(filteredArr[0]){
      return filteredArr[0].count
    }
    return 0;
  }

  preparePosts(postArr){
    const sortedPostArr = postArr.sort((first, second) => {
      return second.post_id - first.post_id;
    })
    const preparedPostArr = sortedPostArr.map(postObj => (<PostList 
      id={postObj.post_id} 
      username={postObj.username} 
      post={postObj.post} 
      title={postObj.title} 
      date={postObj.created_at} 
      commentCount={this.state.comments.filter(num => num === postObj.post_id).length} 
      likes = {this.getLikeCount(postObj.post_id, this.state.likes)}
      />))

    return preparedPostArr;
  }

  setPosts(){
    let url = 'https://ktichmann-forum-api.herokuapp.com/posts/'

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.data
        })
      })
  }
  
  getComments(){
    let commentUrl = 'https://ktichmann-forum-api.herokuapp.com/comments/'

    fetch(commentUrl)
      .then(res => res.json())
      .then(res => {
        let response = res.data.map(commentObj => commentObj.post_id)
        this.setState({comments: response})
      })
  }

  getLikes(){
    const postLikesUrl = 'https://ktichmann-forum-api.herokuapp.com/likes/posts'

    fetch(postLikesUrl)
    .then(res => res.json())
    .then(res => {
      this.setState({likes: res.data})
    })
  }

  render(){
    return(
      <Layout title="Index">
        {this.preparePosts(this.state.data)}
        <Link to="/post" state={{post_id: 1}}>Testing Posts</Link>
      </Layout>
    )
  }
}

export default IndexPage
