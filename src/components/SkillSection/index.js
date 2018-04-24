import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import angularLogo from '../../assets/images/skills/angularjs.svg'
import pythonLogo from '../../assets/images/skills/pylogo.png'
import d3Logo from '../../assets/images/skills/d3.png'
import djangoLogo from '../../assets/images/skills/django.png'
import railsLogo from '../../assets/images/skills/rails-logo.png'
import highchartsLogo from '../../assets/images/skills/highchart.svg'
import reactLogo from '../../assets/images/skills/react.png'
import SkillUnit from '../SkillUnit';

class SkillSection extends React.Component {
  render() {
    return (
      <Section title="Skills">
        <div className="row">
        <SkillUnit
            logo={angularLogo}
            colour='#FFFFFF'
            link='https://angularjs.org/'
            title='AngularJS'
          />
          <SkillUnit
            logo={pythonLogo}
            colour='#FFFFFF'
            link='https://pyhton.org/'
            title='Pyhton'
          />
          <SkillUnit
            logo={djangoLogo}
            colour='#FFFFFF'
            link='https://www.djangoproject.com/'
            title='django'
          />
          <SkillUnit
            logo={railsLogo}
            colour='#FFFFFF'
            link='http://rubyonrails.org/'
            title='Ruby on Rails'
          />
          <SkillUnit
            logo={d3Logo}
            colour='#FFFFFF'
            link='https://d3js.org/'
            title='D3'
          />
          <SkillUnit
            logo={highchartsLogo}
            colour='#FFFFFF'
            link='https://www.highcharts.com/'
            title='Highcharts'
          />
          <SkillUnit
            logo={reactLogo}
            colour='#FFFFFF'
            link='https://reactjs.org/'
            title='ReactJS'
          />
        </div>
      </Section>
    )
  }
}

export default SkillSection
