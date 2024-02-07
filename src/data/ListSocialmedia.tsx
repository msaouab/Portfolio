import { SocialMediaType } from "../_types/types";
import twitter from "../assets/SocialMedia/twitter.svg";
import gmail from "../assets/SocialMedia/gmail.svg";
import github from "../assets/SocialMedia/github.svg";
import telegram from "../assets/SocialMedia/telegram.svg";
import linkedin from "../assets/SocialMedia/linkedin.svg";

const Socialmedia: SocialMediaType[] = [
	{
		url: "mailto:saouab.mohammed@gmail.com",
		name: "gmail",
		icon: gmail,
	},
	{
		url: "https://github.com/msaouab",
		name: "github",
		icon: github,
	},
	{
		url: "https://www.linkedin.com/in/msaouab/",
		name: "linkedin",
		icon: linkedin,
	},
	{
		url: "https://twitter.com/msaouab",
		name: "twitter",
		icon: twitter,
	},
	{
		url: "https://t.me/msaouab",
		name: "telegram",
		icon: telegram,
	},
];

export default Socialmedia;
