type SkillsType = {
	name: string;
	icon: string;
};
type ProjectType = {
	name: string;
	icon: string | IconType;
	description: string;
	image: string;
	imgType: "scrollable" | "fixed";
	demo: string;
	code: string;
	skills: string[];
};

type IconType = string | React.ReactNode;

type SkillsProps = {
	skills: string[];
};

type NavType = {
	name: string;
	path: string;
};

type GoToProps = {
	url: string;
	icon: React.ReactNode;
	text: string;
};

type CarrierType = {
	img: string;
	companyName: string;
	companyLink: string;
	jobTitle: string;
	jobPeriod: string;
	jobLocation: string;
	role: string;
};

type SocialMediaType = {
	url: string;
	name: string;
	icon: string;
};

export type {
	ProjectType,
	SkillsProps,
	NavType,
	GoToProps,
	CarrierType,
	SkillsType,
	SocialMediaType,
};
