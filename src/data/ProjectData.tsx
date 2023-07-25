import trans from '/Overview.jpg'
import GifApi from '/src/assets/ProjectsImg/GifsAPi.png'

const Technologies = [
	"C / Cpp",
	"DevOps",
	"JavaScript",
	"TypeScript",
	"ReactJs",
	"NestJs",
];

const projects = [
	{
		name: "minishell",
		link: "https://github.com/msaouab/Minishell-42",
		img: "",
		technologies: ["C / Cpp"],
		description: "",
	},
	{
		name: "ft_Containers",
		link: "https://github.com/msaouab/ft_Containers",
		img: "",
		technologies: ["C / Cpp"],
		description: "",
	},
	{
		name: "ft_IRC",
		link: "https://github.com/msaouab/ft_irc",
		img: "",
		technologies: ["C / Cpp"],
		description: "",
	},
	{
		name: "Inception",
		link: "https://github.com/msaouab/Inception",
		img: "",
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
		link: "https://msaouab-gifsproject.netlify.app/",
		img: GifApi,
		technologies: ["TypeScript", "ReactJs"],
	},
];

export { Technologies, projects };