import trans from '/Overview.jpg'
import GifApi from '/src/assets/ProjectsImg/GifsAPi.png'
import Inception from '/src/assets/ProjectsImg/inception.gif'
import { Code, Computer } from '@mui/icons-material';
import { FaReact } from 'react-icons/fa';
import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { SiNestjs } from 'react-icons/si';
import IRC from '/src/assets/ProjectsImg/irc.jpg'
import Container from '/src/assets/ProjectsImg/container.jpg'

const Technologies = [
	{
		name: "C / Cpp",
		icon: <Code />,
	},
	{
		name: "DevOps",
		icon: <Computer />,
	},
	{
		name: "JavaScript",
		icon: <BiLogoJavascript />,
	},
	{
		name: "TypeScript",
		icon: <BiLogoTypescript />,
	},
	{
		name: "ReactJs",
		icon: <FaReact />,
	},
	{
		name: "NestJs",
		icon: <SiNestjs />,
	},
];

const Projects = [
	{
		name: "ft_Containers",
		link: "https://github.com/msaouab/ft_Containers",
		img: Container,
		technologies: ["C / Cpp"],
		description: "",
	},
	{
		name: "ft_IRC",
		link: "https://github.com/msaouab/ft_irc",
		img: IRC,
		technologies: ["C / Cpp"],
		description: "",
	},
	{
		name: "Inception",
		link: "https://github.com/msaouab/Inception",
		img: Inception,
		technologies: ["DevOps"],
		description: "",
	},
	{
		name: "ft_transcendence",
		link: "https://github.com/msaouab/ft_transcendence",
		img: trans,
		technologies: ["ReactJs", "TypeScript", "NestJs", "DevOps"],
		description: "",
	},
	{
		name: "BootCamp Web Dev",
		link: "https://github.com/msaouab/BootCamp-React-projects-js-ts",
		img: "",
		technologies: ["JavaScript", "TypeScript", "ReactJs"],
	},
	{
		name: "Gifs Search Engine",
		link: "https://takehome-assignment.netlify.app/",
		img: GifApi,
		technologies: ["TypeScript", "ReactJs"],
	},
];

export { Technologies, Projects };