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
  }

  preparePosts(postArr){
    let preparedPostArr = postArr.map(postObj => (<PostList 
      id={postObj.post_id} 
      username={postObj.username} 
      post={postObj.post} 
      title={postObj.title} 
      date={postObj.created_at} 
      commentCount={this.state.comments.filter(num => num == postObj.post_id).length} />))

    return preparedPostArr;
  }

  render(){
    return(
      <Layout title="Index">
        {this.preparePosts(this.state.data)}
      </Layout>
    )
  }
}

export default IndexPage
