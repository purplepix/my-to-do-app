import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../brazil-flag.jpg';
//conectar o componente atual ao store
import { connect } from 'react-redux';

class About extends Component {
  // QUANDO SE USA REDUX OS STATES FICAM DENTRO DE STORE
  // state = {
  //   posts: []
  // }
  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => {
  //       this.setState({
  //         posts: res.data.slice(0,10)
  //       })
  //     })
  // }
  render() {
    console.log(this.props);

    const { posts } = this.props;
    const postLists = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="a Brazilian flag"/>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    );
    return (
      <div className="container about">
        <h4 className="center">About</h4>
        {postLists}
      </div>
    );
  }
} 

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(About);
