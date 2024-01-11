import trans from "/Overview.jpg";
import GifApi from "/src/assets/ProjectsImg/GifsAPi.png";
import Inception from "/src/assets/ProjectsImg/inception.gif";
import { Code, Computer } from "@mui/icons-material";
import { FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import IRC from "/src/assets/ProjectsImg/irc.jpg";
import Container from "/src/assets/ProjectsImg/container.jpg";
import { NavType, ProjectType } from "../_types/types";
import CarRental from "/src/assets/ProjectsImg/Car-Rental.png";
import Ecommerce from "/src/assets/ProjectsImg/Minimalist-Ecommerce.png";

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
		demo: "https://car-rental.msaouab.vercel.app/",
		code: "https://github.com/msaouab/car-rental",
		image: CarRental,
		technologies: ["ReactJs", "TypeScript"],
		description:
			"A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
		skills: ["ReactJs", "TypeScript"],
	},
	{
		name: "Ecommerce",
		icon: "🛒",
		demo: "https://e-commerce-msaouab.vercel.app/",
		code: "https://github.com/msaouab/e-commerce",
		image: Ecommerce,
		technologies: [],
		description:
			"With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need.",
		skills: ["React", "TypeScript"],
	},
	{
		name: "ft_transcendence",
		icon: "",
		demo: "",
		code: "https://github.com/msaouab/ft_transcendence",
		image: trans,
		technologies: ["ReactJs", "TypeScript", "NestJs", "DevOps"],
		description: "",
		skills: ["ReactJs", "TypeScript", "NestJs", "Docker"],
	},
	{
		name: "Inception",
		icon: "",
		demo: "",
		code: "https://github.com/msaouab/Inception",
		image: Inception,
		technologies: ["DevOps"],
		description: "",
		skills: ["Docker"],
	},
	{
		name: "Gifs Search Engine",
		icon: "",
		demo: "https://takehome-assignment.netlify.app/",
		code: "",
		image: GifApi,
		technologies: ["TypeScript", "ReactJs"],
		description: "",
		skills: ["ReactJs", "TypeScript"],
	},
	{
		name: "ft_IRC",
		icon: "",
		demo: "",
		code: "https://github.com/msaouab/ft_irc",
		image: IRC,
		technologies: ["C / Cpp"],
		description: "",
		skills: ["C", "Cpp", "Socket"],
	},
	{
		name: "ft_Containers",
		icon: "",
		demo: "",
		code: "https://github.com/msaouab/ft_Containers",
		image: Container,
		technologies: ["C / Cpp"],
		description:
			"The 'ft_container' project at 42 School involves implementing custom versions of standard C++ containers, such as vectors, lists, stacks, and queues. It aims to enhance students' understanding of data structures, algorithms, and memory management within the context of the C++ Standard Template Library (STL).",
		skills: ["Cpp"],
	},
];

const listNav: NavType[] = [
	{
		path: "/",
		name: "About Me",
	},
	{
		path: "/project",
		name: "Projects",
	},
];

export { Technologies, Projects, listNav };
