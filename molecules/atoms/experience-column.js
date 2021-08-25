import ExperienceList from './experience-list'

export default function Experience ({skillName, skillList}) {

  return (
    <>
        <div className="p-4  md:border-r-2 md:border-l-2 md:border-gray-200">
          <article className="prose-sm">
            <h1 className="justify-center text-center uppercase font-bold border-b-2 border-color-gray-200">
              {skillName}
            </h1>
          </article>
          <div className="flex align-middle justify-center">
            <div className="overflow-auto lg:overflow-visible flex-grow">
              <table className="table w-full justify-center">
                <tbody>
                  {skillList.map((skill, index) => <ExperienceList index={index} skill={skill} key={skill.key}/>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </>
  )
}