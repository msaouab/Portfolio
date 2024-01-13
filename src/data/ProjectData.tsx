import trans from "/Overview.jpg";
import Inception from "/src/assets/ProjectsImg/inception.gif";
import { Code, Computer } from "@mui/icons-material";
import { FaDocker, FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import IRC from "/src/assets/ProjectsImg/irc.jpg";
import Container from "/src/assets/ProjectsImg/container.jpg";
import { ProjectType } from "../_types/types";
import CarRental from "/src/assets/ProjectsImg/Car-Rental.png";
import Ecommerce from "/src/assets/ProjectsImg/Minimalist-Ecommerce.png";
import ChooseGif from "/src/assets/ProjectsImg/chooseGif.png";

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

const ProjectsData: ProjectType[] = [
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
		name: "Gifs Search Engine",
		icon: "🔍",
		demo: "https://gif-engine.msaouab.vercel.app/",
		code: "https://github.com/msaouab/Choose-your-GIF",
		image: ChooseGif,
		technologies: ["ReactJs", "TypeScript"],
		description:
			"Choose Gif is a Web Application that allows you to search for gifs and download them.",
		skills: ["ReactJs", "TypeScript"],
	},
	{
		name: "ft_transcendence",
		icon: "",
		demo: "",
		code: "https://github.com/msaouab/ft_transcendence",
		image: trans,
		technologies: ["ReactJs", "TypeScript", "NestJs", "DevOps"],
		description:
			"ft_transcendence it's real-time Single Web Application Build with ReactJs TypeScript in front-end and NestJs TypeScript in the Back-end and Docker, that allows you to play pong game with your friends, and chat with them using the web-socket. must user have a profile page and setting page.",
		skills: ["ReactJs", "TypeScript", "NestJs", "Docker"],
	},
	{
		name: "Inception",
		icon: <FaDocker style={{ color: "#2395EC" }} />,
		demo: "",
		code: "https://github.com/msaouab/Inception",
		image: Inception,
		technologies: ["DevOps"],
		description: "",
		skills: ["Docker"],
	},
	// {
	// 	name: "ft_IRC",
	// 	icon: "",
	// 	demo: "",
	// 	code: "https://github.com/msaouab/ft_irc",
	// 	image: IRC,
	// 	technologies: ["C / Cpp"],
	// 	description:
	// 		"IRC (Internet Relay Chat), a text-based communication protocol on the internet that facilitates real-time communication. In this context, users can engage in direct message exchanges and join group channels. Utilizing IRC clients, I connect to IRC servers, which, in turn, interconnect to create a network.",
	// 	skills: ["C", "Cpp", "Socket"],
	// },
	// {
	// 	name: "ft_Containers",
	// 	icon: "",
	// 	demo: "",
	// 	code: "https://github.com/msaouab/ft_Containers",
	// 	image: Container,
	// 	technologies: ["C / Cpp"],
	// 	description:
	// 		"The 'ft_container' project at 42 School entails the development of customized versions of fundamental C++ containers, including vectors, lists, stacks, maps, and sets. Additionally, participants are required to create their own Red/Black Tree. This project is designed to deepen students' comprehension of data structures, algorithms, and memory management within the framework of the C++ Standard Template Library (STL).",
	// 	skills: ["Cpp"],
	// },
];

export { Technologies, ProjectsData };
