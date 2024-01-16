import trans from "/Overview.jpg";
import Inception from "/src/assets/ProjectsImg/inception.gif";
import { FaDocker } from "react-icons/fa";
import { ProjectType } from "../_types/types";
import CarRental from "/src/assets/ProjectsImg/Car-Rental.png";
import Ecommerce from "/src/assets/ProjectsImg/Minimalist-Ecommerce.png";
import ChooseGif from "/src/assets/ProjectsImg/chooseGif.png";

const ProjectsData: ProjectType[] = [
	{
		name: "Car Rental",
		icon: "🚗",
		demo: "https://car-rental.msaouab.vercel.app/",
		code: "https://github.com/msaouab/car-rental",
		image: CarRental,
		imgType: "scrollable",
		description:
			"A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an easy-to-use interface for searching, comparing, and reserving cars from a wide selection of vehicles that vary in make, model, size, and price.",
		skills: ["ReactJs", "TypeScript"],
	},
	{
		name: "Ecommerce",
		icon: "🛒",
		demo: "https://e-commerce-msaouab.vercel.app/",
		code: "https://github.com/msaouab/e-commerce",
		image: Ecommerce,
		imgType: "scrollable",
		description:
			"This is a minimalist e-commerce website built with React TypeScript and Styled Components - Material ui. This website features a modern and intuitive design, with easy-to-use navigation and a simple shopping experience that puts the focus on the products.",
		skills: ["React", "TypeScript"],
	},
	{
		name: "Gifs Search Engine",
		icon: "🔍",
		demo: "https://gif-engine.msaouab.vercel.app/",
		code: "https://github.com/msaouab/Choose-your-GIF",
		image: ChooseGif,
		imgType: "scrollable",
		description:
			"Choose Gif is a Web Application that allows you to search for gifs and download them.",
		skills: ["ReactJs", "TypeScript"],
	},
	{
		name: "ft_transcendence",
		icon: "🏓",
		demo: "",
		code: "https://github.com/msaouab/ft_transcendence",
		image: trans,
		imgType: "fixed",
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
		imgType: "fixed",
		description:
			"Containerized LAMP Stack (Linux, Apache, MySQL, PHP), Mastered Docker, and Docker Compose to deploy a LAMP stack for a WordPress website. I gained hands-on experience in containerization technology, managing services, networks, and configurations, boosted my system administration skills, and prepared for complex future projects.",
		skills: ["Docker", "Docker Compose"],
	},
	// {
	// 	name: "ft_IRC",
	// 	icon: "",
	// 	demo: "",
	// 	code: "https://github.com/msaouab/ft_irc",
	// 	image: IRC,
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
	// 	description:
	// 		"The 'ft_container' project at 42 School entails the development of customized versions of fundamental C++ containers, including vectors, lists, stacks, maps, and sets. Additionally, participants are required to create their own Red/Black Tree. This project is designed to deepen students' comprehension of data structures, algorithms, and memory management within the framework of the C++ Standard Template Library (STL).",
	// 	skills: ["Cpp"],
	// },
];

export { ProjectsData };
