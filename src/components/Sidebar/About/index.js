import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          A technology enthusiast & a coffee addict, who loves travelling, writes occasionally
          and follows cricket ardently.
          <div className="emoji">
          👨‍💻&nbsp;☕&nbsp;🏔&nbsp;✍️&nbsp; 🏏&nbsp; 🤷‍♂️ 
          </div>
        </div>
      </div>
    )
  }
}

export default About