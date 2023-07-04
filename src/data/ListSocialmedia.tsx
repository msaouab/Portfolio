import {
	FaEnvelope,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTelegram,
	FaTwitter,
	FaWhatsapp,
} from "react-icons/fa";

const GithubIcon = () => <FaGithub size={25}/>;
const InstagramIcon = () => <FaInstagram size={25} />;
const LinkedinIcon = () => <FaLinkedin size={25} />;
const TelegramIcon = () => <FaTelegram size={25} />;
const TwitterIcon = () => <FaTwitter size={25} />;
const WhatsappIcon = () => <FaWhatsapp size={25} />;
const EmailIcon = () => <FaEnvelope size={25} />;

const listSocialmedia = [
	{
		id: 0,
		link: "mailto:saouab.mohammed@gmail.com",
		name: "Mail",
		cls: "Mail",
		icon: <EmailIcon />,
	},
	{
		id: 1,
		link: "https://github.com/msaouab",
		name: "Github",
		cls: "Github",
		icon: <GithubIcon />,
	},
	{
		id: 2,
		link: "https://www.linkedin.com/in/msaouab/",
		name: "Linkedin",
		cls: "Linkedin",
		icon: <LinkedinIcon />,
	},
	{
		id: 3,
		link: "https://twitter.com/msaouab",
		name: "Twitter",
		cls: "Twitter",
		icon: <TwitterIcon />,
	},
	{
		id: 4,
		link: "https://www.instagram.com/themedsaouab/",
		name: "Instagram",
		cls: "Instagram",
		icon: <InstagramIcon />,
	},
	{
		id: 5,
		link: "https://wa.me/qr/EUWI4W2PDJJOF1",
		name: "Whatsapp",
		cls: "Whatsapp",
		icon: <WhatsappIcon />,
	},
	{
		id: 6,
		link: "https://wa.me/qr/EUWI4W2PDJJOF1",
		name: "Telegram",
		cls: "Telegram",
		icon: <TelegramIcon />,
	},
];

export default listSocialmedia;
