import React from "react"
import ContentList from '../components/contentList'
import Layout from "../components/layout"
import Chat from "../components/chat"
import { Link } from 'gatsby';
import "../components/loader.css";

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
    const preparedPostArr = sortedPostArr.map(postObj => (
      <Link to={`/post`} state={{post_id: postObj.post_id}} style={{textDecoration: 'none'}}>
        <ContentList 
          id={postObj.post_id} 
          username={postObj.username} 
          content={postObj.post.substring(0, 175)} 
          title={postObj.title} 
          date={postObj.created_at} 
          commentCount={this.state.comments.filter(num => num === postObj.post_id).length} 
          likes = {this.getLikeCount(postObj.post_id, this.state.likes)}
          hover = {true}
          />
        </Link>
      ))

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

  handleSubmit(e, val){
    console.log('e: ', e)
    console.log('value: ', val)
  }

  render(){
    const topStyles = {
      textDecoration: 'none',
      color: 'white',
      backgroundColor: '#113af1',
      padding: '10px 45px',
      fontSize: '14px',
      fontFamily: 'Ubuntu',
      fontWeight: '600',
      borderRadius: '5px'
    }
    const selectStyles = {
      backgroundColor: 'rgba(0,100,200,.2)',
      borderRadius: '5px',
      textAlignLast: 'center',
      fontFamily: 'Ubuntu',
      fontSize: '14px',
      border: 'none'
    }
    return(
      <Layout title="For'm">
        <div style={{marginBottom: '30px', display: 'flex', justifyContent: 'space-between'}}>
          <Link to="post/create" style={topStyles}>Start a Discussion</Link>
          <select style={selectStyles}>
            <option value="title">Title</option>
            <option value="date">Date</option>
            <option value="likes">Likes</option>
            <option value="comments">Comments</option>
          </select>
        </div>
        {this.state.data.length > 0 ? this.preparePosts(this.state.data) : <div className="loader">Loading...</div>}
        <Chat auth={this.state.auth}/>
      </Layout>
    )
  }
}

export default IndexPage
