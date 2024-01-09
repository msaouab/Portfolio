import trans from "/Overview.jpg";
import GifApi from "/src/assets/ProjectsImg/GifsAPi.png";
import Inception from "/src/assets/ProjectsImg/inception.gif";
import { Code, Computer } from "@mui/icons-material";
import { FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import IRC from "/src/assets/ProjectsImg/irc.jpg";
import Container from "/src/assets/ProjectsImg/container.jpg";
import { ProjectType } from "../_types/types";
import CarRental from "/src/assets/ProjectsImg/Car-Rental.png";

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

const Projects: ProjectType[] = [
	{
		name: "Car Rental",
		icon: "🚗",
		link: "",
		github: "",
		image: CarRental,
		technologies: ["ReactJs", "TypeScript"],
		description:
			"A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
		skills: ["ReactJs", "TypeScript"],
	},
	{
		name: "ft_Containers",
		icon: "",
		link: "",
		github: "https://github.com/msaouab/ft_Containers",
		image: Container,
		technologies: ["C / Cpp"],
		description: "",
		skills: ["Cpp"],
	},
	{
		name: "ft_IRC",
		icon: "",
		link: "",
		github: "https://github.com/msaouab/ft_irc",
		image: IRC,
		technologies: ["C / Cpp"],
		description: "",
		skills: ["C", "Cpp", "Socket"],
	},
	{
		name: "Inception",
		icon: "",
		link: "",
		github: "https://github.com/msaouab/Inception",
		image: Inception,
		technologies: ["DevOps"],
		description: "",
		skills: ["Docker"],
	},
	{
		name: "ft_transcendence",
		icon: "",
		link: "",
		github: "https://github.com/msaouab/ft_transcendence",
		image: trans,
		technologies: ["ReactJs", "TypeScript", "NestJs", "DevOps"],
		description: "",
		skills: ["ReactJs", "TypeScript", "NestJs", "Docker"],
	},
	{
		name: "BootCamp Web Dev",
		icon: "",
		link: "",
		github: "https://github.com/msaouab/BootCamp-React-projects-js-ts",
		image: "",
		technologies: ["JavaScript", "TypeScript", "ReactJs"],
		description: "",
		skills: ["ReactJs", "TypeScript", "JavaScript"],
	},
	{
		name: "Gifs Search Engine",
		icon: "",
		link: "https://takehome-assignment.netlify.app/",
		github: "",
		image: GifApi,
		technologies: ["TypeScript", "ReactJs"],
		description: "",
		skills: ["ReactJs", "TypeScript"],
	},
];

export { Technologies, Projects };
