import React, { Component } from 'react'

import './style.scss'
import 'font-awesome/css/font-awesome.min.css'

class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul className="icons-list">
          <li className="icon">
            <a href="https://www.github.com/navneet35371" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://stackoverflow.com/users/2439751/navneet35371" target="_blank">
              <i className="fa fa-stack-overflow"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.twitter.com/navneet35371" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.linkedin.com/in/navneet-suman-38813244" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://medium.com/@navneetsuman" target="_blank">
              <i className="fa fa-medium"></i>
            </a>
          </li>
          <li className="icon">
            <a href="mailto:navneet35371@gmail.com" target="_blank">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        </ul>
        <div className="small">
          Built with ❤️ using <a href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</a>
        </div>
      </div>
    )
  }
}

export default Links