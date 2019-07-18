import React, { Component } from 'react';
import { withRouter } from 'next/router';
 
class PrefetchComponent extends Component {

    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
  componentDidMount() {

    // This function is not executed on the Server side, so we can put the prefetching data in the "componentDidMount"

    // This function is always called when the component is rendered on the browser, which means only on the runtime in Chrome..

    const { router } = this.props;
    router.prefetch('/about');

    fetch('http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees')
      .then(postsResponse => postsResponse.json())
      .then((posts) => {
        console.dir(posts)
        this.setState({
          posts
        });
      });

  }
  render() {
      debugger;
    return (
        <div>
            {   this.state.posts.map(post => (
                    <div key={post.id} style={{"borderBottom": "1px solid red", "margin": "10px"}}>
                        <img src={post.avatar}></img>
                        <h2>{post.name}</h2>
                    </div>
                ))
            }
        </div>
    )
  }
}
 
export default withRouter(PrefetchComponent);