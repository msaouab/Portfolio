type ProjectType = {
	name: string;
	icon: string | IconType;
	description: string;
	technologies: string[];
	image: string;
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

export type { ProjectType, SkillsProps, NavType, GoToProps };
