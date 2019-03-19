import React from "react"
import ContentList from "../components/contentList"
import Layout from "../components/layout"
import { Link } from "gatsby"
import "../components/styles/loader.css"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: "",
      comments: [],
      data: [],
      likes: [],
      postView: <div className="loader">Loading...</div>,
    }

    this.sortBy = this.sortBy.bind(this)
    this.preparePosts = this.preparePosts.bind(this)
    this.setPosts = this.setPosts.bind(this)
  }

  componentWillMount() {
    this.setPosts()
    this.getComments()
    this.getLikes()
    this.setState({
      auth: window.sessionStorage.getItem("token"),
    })
  }

  getLikeCount(post_id, arr) {
    const filteredArr = arr.filter(obj => obj.id === post_id)
    if (filteredArr[0]) {
      return filteredArr[0].count
    }
    return 0
  }

  preparePosts(postArr, sort = true) {
    let sortedPostArr = postArr
    if (sort) {
      sortedPostArr = postArr.sort((first, second) => {
        return second.post_id - first.post_id
      })
    }
    const preparedPostArr = sortedPostArr.map(postObj => (
      <Link
        to={`/post`}
        state={{ post_id: postObj.post_id }}
        style={{ textDecoration: "none" }}
      >
        <ContentList
          id={postObj.post_id}
          username={postObj.username}
          content={postObj.post.substring(0, 175)}
          title={postObj.title}
          date={postObj.created_at}
          commentCount={
            this.state.comments.filter(num => num === postObj.post_id).length
          }
          likes={this.getLikeCount(postObj.post_id, this.state.likes)}
          hover={true}
        />
      </Link>
    ))

    this.setState({
      postView: preparedPostArr,
    })
  }

  setPosts() {
    let url = "https://ktichmann-forum-api.herokuapp.com/posts/"

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.data,
        })
        this.preparePosts(this.state.data)
      })
  }

  getComments() {
    let commentUrl = "https://ktichmann-forum-api.herokuapp.com/comments/"

    fetch(commentUrl)
      .then(res => res.json())
      .then(res => {
        let response = res.data.map(commentObj => commentObj.post_id)
        this.setState({ comments: response })
        this.preparePosts(this.state.data)
      })
  }

  getLikes() {
    const postLikesUrl = "https://ktichmann-forum-api.herokuapp.com/likes/posts"

    fetch(postLikesUrl)
      .then(res => res.json())
      .then(res => {
        this.setState({ likes: res.data })
        this.preparePosts(this.state.data)
      })
  }

  handleSubmit(e, val) {
    console.log("e: ", e)
    console.log("value: ", val)
  }

  sortBy(event) {
    let choice = event.target.value
    const sortHelper = (first, second) => {
      if (first < second) {
        return -1
      } else {
        return 1
      }
    }
    let res
    switch (choice) {
      case "title":
        res = this.state.data.sort((firstObj, secondObj) => {
          const firstTitle = firstObj.title.toUpperCase()
          const secondTitle = secondObj.title.toUpperCase()
          return sortHelper(firstTitle, secondTitle)
        })
        break
      case "date":
        res = this.state.data.sort((firstObj, secondObj) => {
          const firstDate = firstObj.created_at
          const secondDate = secondObj.created_at
          return sortHelper(secondDate, firstDate)
        })
        break
      case "likes":
        res = this.state.data.sort((firstObj, secondObj) => {
          let firstLikes = this.state.likes.filter(
            obj => obj.id === firstObj.post_id
          )[0]
          let secondLikes = this.state.likes.filter(
            obj => obj.id === secondObj.post_id
          )[0]
          if (firstLikes && secondLikes) {
            return sortHelper(secondLikes.count, firstLikes.count)
          } else if (firstLikes) {
            return -1
          } else {
            return 1
          }
        })
        break
      case "comments":
        res = this.state.data.sort((firstObj, secondObj) => {
          let firstCommentCount = this.state.comments.filter(
            num => num == firstObj.post_id
          ).length
          let secondCommentCount = this.state.comments.filter(
            num => num == secondObj.post_id
          ).length
          return sortHelper(secondCommentCount, firstCommentCount)
        })
        break
      default:
        res = this.state.data
        break
    }

    this.preparePosts(res, false)
  }

  render() {
    const topStyles = {
      textDecoration: "none",
      color: "white",
      backgroundColor: "#113af1",
      padding: "10px 45px",
      fontSize: "14px",
      fontFamily: "Ubuntu",
      fontWeight: "600",
      borderRadius: "5px",
    }
    const selectStyles = {
      backgroundColor: "rgba(0,100,200,.2)",
      borderRadius: "5px",
      textAlignLast: "center",
      fontFamily: "Ubuntu",
      fontSize: "14px",
      border: "none",
    }
    return (
      <Layout title="For'm">
        <div
          style={{
            marginBottom: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="post/create" style={topStyles}>
            Start a Discussion
          </Link>
          <select style={selectStyles} onChange={this.sortBy}>
            <option value="title">Title</option>
            <option value="date">Date</option>
            <option value="likes">Likes</option>
            <option value="comments">Comments</option>
          </select>
        </div>
        {this.state.postView}
      </Layout>
    )
  }
}

export default IndexPage
