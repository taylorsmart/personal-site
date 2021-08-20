import Image from 'next/image'

export default function ProjectCard ({project}) {
  let projectName = project.name;
  let projectLink = project.link;
  let projectImage = project.image;
  let projectShortDesc = project.shortDesc;
  let projectPenLink = project.penLink;

  return (
      <div className="flex shadow-lg hover:bg-gray-200 pl-4">
        <Image
          className="justify-center"
          src={projectImage}
          alt={projectName}
          width={90}
          height={90}/>
        <div className="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg justify-between">
          <article className="prose-sm">
            <div className="flex items-center">
              <h2 className="text-gray-800 font-medium mr-auto upper">{projectName}</h2>
            </div>
            <p className="text-gray-700 mt-4 flex-grow ">
              {projectShortDesc}
            </p>
          </article>
          <div className="flex items-center justify-center align-baseline mt-4 top-auto">
            <button className=" border border-gray-900 text-blue-600 hover:bg-gray-900 hover:text-blue-100  px-2 py-2 rounded-full mr-2">See GitHub</button>
            {projectPenLink ? <button className="hidden md:flex bg-blue-600 text-gray-200 px-2 py-2 rounded-md">Test</button> : null}
          </div>
        </div>
      </div>
  )
}