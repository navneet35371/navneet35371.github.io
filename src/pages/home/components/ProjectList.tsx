import { FC } from "react";
import { Projects } from "../../../const";
import { ProjectType } from "../../../types";

const Project: FC<{ project: ProjectType }> = (props) => {
  const { title, description, tech } = props.project;

  return (
    <div className=" overflow-hidden border rounded-xl p-0.5 mb-4">
      <div className="rounded-[10px] bg-white p-4 pt-8 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-0.5">{description}</p>

        <div className="mt-4 flex flex-wrap gap-1">
          {tech.map((t, i) => {
            return (
              <span
                key={i}
                className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
              >
                {t}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ProjectList = () => {
  return (
    <>
      <div className="text-xl font-semibold">Projects</div>
      <div className="columns-1 md:columns-2 gap-8 mt-4">
        {Projects.map((project, i) => {
          return <Project key={i} project={project}></Project>;
        })}
      </div>
    </>
  );
};

export default ProjectList;
