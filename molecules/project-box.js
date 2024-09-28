import loadable from "@loadable/component";
const ProjectCard = loadable(() => import("./atoms/project-card"));
const ShowHide = loadable(() => import("../molecules/atoms/show-hide"));

const Spinner = loadable(() => import("./atoms/spinner"));

import content from "../content/meta/about-me/about-me-content";
import { slideUp, appear, slideRight } from "../content/meta/transitions";

export default function ProjectBox() {
  let projectList = content.projectList;

  return (
    <>
      <div className="text-left border-b-4 border-double border-gray-500 pt-4" />
      <div className="flex-grow">
        <div className="grid sm:grid-cols-1 sm:m-3 md:grid-cols-3 md:gap-4">
          {/* {projectList.map((project) => <ShowHide Component={ProjectCard} perc={1} transition={slideUp} project={project} key={project.key}/>)} */}
          {projectList.map((project) => (
            <ProjectCard project={project} key={project.key} />
          ))}
        </div>
      </div>
    </>
  );
}
