import { FaPython } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiFlask } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiRender } from "react-icons/si";
import { SiRailway } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { SiHuggingface } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { SiAnthropic } from "react-icons/si";
import { SiLangchain } from "react-icons/si";

/* Deep-ML (deep-ml.com) problem-solving stats — update occasionally */
export const deepml = {
    url: 'https://www.deep-ml.com/profile/ex07TZ98BiNs8sUj4Bl3A3Hn5tp1',
    solved: 35,
    easy: 15,
    medium: 16,
    hard: 4,
    topCategories: [
        ['linear-algebra', 13],
        ['deep-learning', 10],
        ['calculus', 4],
        ['machine-learning', 3],
        ['probability', 3],
    ],
}

export const skills = [
    {
        category: 'Languages',
        tech: ['Python', 'JavaScript', 'TypeScript', 'SQL/noSQL', 'HTML', 'CSS'],
        icons: [FaPython, IoLogoJavascript, SiTypescript, GrMysql, ImHtmlFive, FaCss3Alt]
    },
    {
        category: 'Frameworks',
        tech: ['React', 'Next.js', 'Flask', 'FastAPI', 'Node.js', 'Express', 'TailwindCSS'],
        icons: [FaReact, RiNextjsFill, SiFlask, SiFastapi, FaNode, SiExpress, RiTailwindCssFill]
    },
    {
        category: 'Cloud / Infra',
        tech: ['AWS', 'Docker', 'Github', 'Vercel', 'Render', 'Railway', 'Heroku'],
        icons: [FaAws, FaDocker, FaGithub, IoLogoVercel, SiRender, SiRailway, SiHeroku]
    },
    {
        category: 'AI / ML',
        tech: ['Hugging Face', 'OpenAI', 'Anthropic', 'LangChain/LangGraph'],
        icons: [SiHuggingface, SiOpenai, SiAnthropic, SiLangchain]
    }
]