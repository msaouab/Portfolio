import styled from "styled-components";
import ProjectsCard from "./ProjectsCard";

const ProjectsContainer = styled.main`
	& > ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}
	& > .notfund {
		color: #fff;
		text-align: center;
		font-size: 1.5rem;
	}
`;

interface Project {
	name: string;
	technologies: string[];
}

interface ProjectsProps {
	projects: Project[];
	selected: string | null;
}

const HeaderProject: React.FC<ProjectsProps> = ({ projects, selected }) => {
	const filterProjects = selected
		? projects.filter((project) => project.technologies.includes(selected))
		: projects;

	return (
		<ProjectsContainer>
			{filterProjects.length > 0 ? (
				<ul>
					{filterProjects.map((project, index) => (
						<ProjectsCard project={project} key={index} />
					))}
				</ul>
			) : (
				<p className="notfund">No projects found.</p>
			)}
		</ProjectsContainer>
	);
};

export default HeaderProject;
