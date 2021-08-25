import loadable from '@loadable/component'
const Spinner = loadable(() => import('../molecules/atoms/spinner'))
const AboutMe = loadable(() => import('../molecules/about-me'))
const Experience = loadable(() => import('../molecules/experience'))
const ProjectBox = loadable(() => import('../molecules/project-box'))
const ShowHide = loadable(() => import('../molecules/atoms/show-hide'))

import { slideUp, appear, slideRight } from '../content/meta/transitions'


export default function HomeMain() {

  return (
    <>
      {/* <div className='text-left border-b-4 border-double border-gray-500 pt-4'>
        <article className="prose">
          <h1>About Me</h1>
        </article>
      </div> */}
      <div className="flex max-width-full  ">
        <AboutMe/>
      </div>
      <div className='text-left border-b-4 border-double border-gray-500 pt-4'>
        {/* <article className="prose">
          <h1>Experience</h1>
        </article> */}
      </div>
      <div className="flex max-width-full  border-b-2 border-rounded border-gray-200">
        <Experience/>
      </div>

      {/* For Small Screen */}

      <div className="md:hidden">
        <div className='flex text-left  max-width-full border-b-4 border-double border-gray-500 pt-4'>
          <article className="prose">
            <h1>Projects</h1>
          </article>
        </div>
      </div>
      <div className="hidden md:flex">
        <div className="flex-grow  min-h-screen border-b-2 border-rounded border-gray-200">
          <ShowHide Component={ProjectBox} transition={slideUp} perc={.70} md={true}/>
        </div>
      </div>
      <div className="md:hidden grid grid-cols-1 max-width-full min-h-screen border-b-2 border-rounded border-gray-200">
        <ProjectBox  md={false}/>
      </div>
      {/* For Medium Screen */}
      {/* <div className="hidden md:flex  min-h-screen border-b-2 border-rounded border-gray-200">
        <ShowHide Component={ProjectBox} transition={slideUp} perc={.70} md={true}/>
      </div> */}
      {/* <Spinner/> */}
    </>
  )
}