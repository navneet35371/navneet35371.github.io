import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import zomatoLogo from '../../assets/images/experience/zomato-logo.svg'
import fitsoLogo from '../../assets/images/experience/fitso-logo.jpg'
import kayakoLogo from '../../assets/images/experience/kayako-logo-2.jpg'
import hackerLogo from '../../assets/images/experience/hackerrank-logo.png'
import shineLogo from '../../assets/images/experience/shine-logo.png'
import intutelLogo from '../../assets/images/experience/intutel-logo-1.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
        <ExperienceUnit
            logo={intutelLogo}
            colour='#FFFFFF'
            title='Intutel'
            link='https://www.intutel.com/'
            timeperiod='Dec 2015 - current'
            subtitle='Lead the product design and development on client
             side for intutel.com'
          />
          <ExperienceUnit
            logo={shineLogo}
            colour='#FFFFFF'
            title='Shine'
            link='https://www.shine.com/'
            timeperiod='Jan 2015 – Nov 2015'
            subtitle='Created restful apis for shine.com using django.'
          />
          <ExperienceUnit
            logo={hackerLogo}
            colour='#FFFFFF'
            title='Hackerrank'
            link='https://www.hackerrank.com/'
            timeperiod='May 2014 - July 2014'
            subtitle='Implemented the autocomplete for the online code editor.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
