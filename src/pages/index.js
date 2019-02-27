import React from "react"
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

  componentDidMount(){
    let url = 'https://ktichmann-forum-api.herokuapp.com/posts/'

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.data
        })
      })

    let commentUrl = 'https://ktichmann-forum-api.herokuapp.com/comments/'

    fetch(commentUrl)
      .then(res => res.json())
      .then(res => {
        let response = res.data.map(commentObj => commentObj.post_id)
        this.setState({comments: response})
      })
    this.setState({
      auth: window.sessionStorage.getItem('token')
    })

    const postLikesUrl = 'https://ktichmann-forum-api.herokuapp.com/likes/posts'

    fetch(postLikesUrl)
    .then(res => res.json())
    .then(res => {
      this.setState({likes: res.data})
      console.log(this.state.likes.filter(obj => obj.id === 2))
    })
  }

  getLikeCount(post_id, arr) {
    let filteredArr = arr.filter(obj => obj.id === post_id)
    if(filteredArr[0]){
      console.log(filteredArr[0].count)
      return filteredArr[0].count
    }
    return 0;
  }
  preparePosts(postArr){
    let preparedPostArr = postArr.map(postObj => (<PostList 
      id={postObj.post_id} 
      username={postObj.username} 
      post={postObj.post} 
      title={postObj.title} 
      date={postObj.created_at} 
      commentCount={this.state.comments.filter(num => num == postObj.post_id).length} 
      likes = {this.getLikeCount(postObj.post_id, this.state.likes)}
      // likes={this.state.likes ? this.state.likes.filter(obj => (obj.id === postObj.post_id))[0].count : false} 
      />))

    return preparedPostArr;
  }

  render(){
    console.log(this.state.likes)
    return(
      <Layout title="Index">
        {this.preparePosts(this.state.data)}
      </Layout>
    )
  }
}

export default IndexPage
