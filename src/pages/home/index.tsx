import ProjectList from './components/ProjectList'
import ExperienceList from './components/ExperienceList'
import {FaLinkedinIn, FaGithub, FaMediumM, FaStackOverflow, FaTwitter, FaEnvelope} from 'react-icons/fa'
import Skill from './components/Skill'
import { IconContext } from 'react-icons'

const Home = () => {
    const emoji = ['👨‍💻','☕', '🏔', '✍️',  '🏏',  '🤷‍♂️']
  return (
    <div className="w-full">
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-4/6 p-8 md:p-16'>
          <h1 className='text-lg'>Hi, I'm <span className='font-semibold'>Navneet suman</span></h1>
          <p className='text-black font-semibold text-2xl lg:text-4xl mt-6 mb-6'>Full stack product engineer with 7 years' experience. 
            Built robust and innovative solutions for Top product companies, a leading marketing company and a SaaS recruitment platform provider.
          </p>
          <ExperienceList></ExperienceList>
          <ProjectList></ProjectList>
          <Skill></Skill>
        </div>
        <div className='h-screen sticky top-0 bg-black flex-1'>
            <div className='flex flex-col items-center lg:items-start p-8 justify-center h-full'>
                <img className="cursor-pointer w-40 h-40 rounded-full grayscale transition duration-300 delay-150 hover:grayscale-0 hover:delay-300" alt='Navneet suman' src='https://avatars.githubusercontent.com/u/4524905?s=400&u=5d8fc9e50768caac53521315ba51afd44d3e5325&v=4'></img>
                <div className='text-white font-semibold text-2xl mt-4'>Navneet Suman</div>
                <div className='text-gray-200 font-semibold text-lg mt-2'>Full Stack Developer</div>
                <div className='flex flex-row mt-4'>
                    {
                        emoji.map((e, i) => {
                            return (
                                <div className={'flex w-8 h-8 rounded-full items-center text-2xl mr-1' + (i === 0 ? '' : '')}  key={i}>{e}</div>
                            )
                        })
                    }
                </div>
                <div className='text-white text-xl mt-4 text-center md:text-left'>
                    A technology enthusiast & a coffee addict, who loves travelling, writes occasionally and follows cricket ardently.
                </div>
                <div className='flex flex-row mt-4 mb-12'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row mt-2 space-x-2'>
                        <IconContext.Provider value={{ className: "linkIcon" }}>

                            <div className='w-8 h-8'>
                                <a href='https://www.linkedin.com/in/navneet-suman/' aria-label='Linkedin Link' rel="noreferrer" target='_blank'>
                                    <FaLinkedinIn size={24} />
                                </a>
                            </div>
                            <div className='w-8 h-4'>
                                <a href='https://github.com/navneet35371' aria-label='Github Link' rel="noreferrer" target='_blank'>
                                    <FaGithub size={24}/>
                                </a>
                            </div>
                            <div className='w-8 h-4'>
                                <a href='https://medium.com/@navneetsuman' aria-label='Medium Link' rel="noreferrer" target='_blank'>
                                    <FaMediumM size={24} />
                                </a>
                            </div>
                            <div className='w-8 h-4'>
                                <a href='https://stackoverflow.com/users/2439751/navneet' aria-label='Stackoverflow Link' rel="noreferrer" target='_blank'>
                                <FaStackOverflow size={24} />
                                </a>
                            </div>
                            <div className='w-8 h-4'>
                                <a href='https://twitter.com/navneetsuman_' aria-label='Twitter Link' rel="noreferrer" target='_blank'>
                                <FaTwitter size={24} />
                                </a>
                            </div>
                            <div className='w-4 h-4'>
                                <a href='mailto:navneet35371@gmail.com' aria-label='Email' rel="noreferrer" target='_blank'>
                                <FaEnvelope size={24} />
                                </a>
                            </div>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <button className='bg-gray-800 text-white font-semibold text-lg px-4 py-2 rounded-full mt-4'>Download CV</button>
                </div> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home;