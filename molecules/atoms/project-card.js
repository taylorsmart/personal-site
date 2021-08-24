import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard ({project}) {
  let projectName = project.name;
  let projectLink = project.link;
  let projectImage = project.image;
  let projectShortDesc = project.shortDesc;
  let projectPenLink = project.penLink;

  return (
      <div className="shadow-lg hover:bg-gray-200 p-4 ">
        <div className="w-full  text-center ">
        <div className="w-full items-center text-center">
          <article className="prose uppercase ">
            <h2 >{projectName}</h2>
          </article>
        </div>
        <div className="flex items-center justify-center align-baseline mt-4 top-auto pb-2">
          <Link
            key={projectName}
            href={projectLink}
            passHref
            >
              <a target="_blank" rel="noreferrer">
                <button className=" border border-gray-900 text-blue-600 hover:bg-gray-900 hover:text-blue-100  px-2 py-2 rounded-full mr-2">See GitHub</button>
              </a>
          </Link>
          {/* {projectPenLink ? <button className="hidden md:flex bg-blue-600 text-gray-200 px-2 py-2 rounded-md">Test</button> : null} */}
        </div>
        <hr className='pt-2'></hr>
        <Image
          src={projectImage}
          alt={projectName}
          width={400}
          height={250}/>
        </div>
        <hr className="pb-6"></hr>
        <div className="flex  bg-white rounded-lg justify-between ">
          <article className="prose italic">
            <p className="text-gray-700 mt-4 flex-grow ">
              {projectShortDesc}
            </p>
          </article>
        </div>
      </div>
  )
}