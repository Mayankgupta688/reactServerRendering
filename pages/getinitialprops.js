import React, { Component } from 'react';
import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
 
class GetInitialPropsComponent extends Component {

    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    static async getInitialProps() {

      const responseData = await fetch('http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees');
      const responseJSON = await responseData.json()
      return {
        posts: responseJSON
      }

    }
    render() {
      return (
          <div>
              {   this.props.posts.map(post => (
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
 
export default withRouter(GetInitialPropsComponent);