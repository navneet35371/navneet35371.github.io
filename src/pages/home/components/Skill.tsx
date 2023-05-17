import { FaDocker, FaGit, FaJava, FaJs, FaLinux, FaNodeJs, FaReact } from "react-icons/fa";
import { SiDjango, SiHtml5 , SiTypescript, SiCsswizardry, SiRubyonrails, SiPostgresql, SiMongodb, SiRedis, SiPython, SiJavascript} from "react-icons/si";
import { Skills } from "../../../const";

const SkillIcons: {
  [key: string]: JSX.Element;
} = {
    "Python": <SiPython size={48} />,
    "React": <FaReact size={48} />,
    "JavaScript": <SiJavascript size={48} />,
    "TypeScript": <SiTypescript size={48} />,
    "HTML": <SiHtml5 size={48} />,
    "CSS": <SiCsswizardry size={48} />,
    "Git": <FaGit size={48} />,
    "Docker": <FaDocker size={48} />,
    "Linux": <FaLinux size={48} />,
    "Django": <SiDjango size={48}></SiDjango>,
    "ROR": <SiRubyonrails size={48}/>,
    "Postgres": <SiPostgresql size={48}/>,
    "MongoDB": <SiMongodb size={48}/>,
    "Redis": <SiRedis size={48}/>,
    "Java": <FaJava size={48}></FaJava>,
    "NodeJS": <FaNodeJs size={48}></FaNodeJs>
};

const Skill = () => {
  return (
    <div className="my-8">
      <div className="text-xl font-semibold">Skills</div>
      <div className="flex flex-row flex-wrap my-4">
        {Skills.map((skill, i) => {
            return <div className="flex m-2 my-4 items-center justify-center w-16 h-16" key={i}>
                <span>
                    {SkillIcons[skill.name]} <p className="text-sm text-center">{skill.name}</p>
                </span>
            </div>
        })}
      </div>      
    </div>
  );
};

export default Skill;
