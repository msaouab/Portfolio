type ProjectType = {
	name: string;
	icon: string;
	description: string;
	technologies: string[];
	image: string;
	demo: string;
	code: string;
	skills: string[];
};

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
