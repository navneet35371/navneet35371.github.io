import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import spotifyQuizLogo from '../../assets/images/projects/spotify-quiz.png'
import opensourceLogo from '../../assets/images/projects/open-source-logos.png'
import littleNomadLogo from '../../assets/images/projects/little-nomad.png'
import reviewsLogo from '../../assets/images/projects/reviews.png'
import walkthroughViewGif from '../../assets/images/projects/wvwalkthroughview-optimize.gif'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={reviewsLogo}
            colour="#FFFFFF"
            title="Reviews opinion mining"
            link="https://www.github.com/navneet35371/"
            timeperiod="2017 - ???"
            subtitle="Developed feature based opinion mining using word vector spaces 
            for product reviews and blogs."
          />
          <ExperienceUnit
            logo={opensourceLogo}
            colour="#FFFFFF"
            title="Opensource contribution"
            link="https://www.github.com/navneet35371/"
            timeperiod="2014 - ???"
            subtitle="Contributed to Various open-source application. 
              Some of them are Python, Django, Duckduckgo , edx"
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
