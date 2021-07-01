import React from "react";
import './FetchPosts.css';

export default class FetchRandomUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      posts: [],
      comments: []
    };
  }
  componentDidMount() {
    this.fetchPosts();
    this.fetchComments();
  }

  async fetchPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      this.setState({ posts: data, loading: false});
    }
  
  async fetchComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();
    this.setState({ comments: data, loading: false });
  }
    
  render() {
    const { error, loading, posts, comments, myData } = this.state;
    return ( 
      <div>
        <div className='container'>
          {posts.map((post, i) => {
            return (
              <div>
                <div className='post' key={post.id}>{post.body}</div>
                <div className='comment' key={comments.id}>{comments[i].body}</div>
              </div>
            )
          })}
          </div>
      </div>
      );
   }
}