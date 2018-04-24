import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import SkillSection from '../components/SkillSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          Hi, I'm <span className="bold">Navneet suman</span>
        </h5>

        <h3 className="bold">
          Full stack product engineer with 3 years' experience building products
          for with a leading marketing tech company, an early stage health start up
          and a leading SaaS recruitment platform provider.
        </h3>

        <ExperienceSection />
        <ProjectsSection />
        <SkillSection />
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
