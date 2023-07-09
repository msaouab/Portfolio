import styled from "styled-components";
import ProjectsCard from "./ProjectsCard";

const ProjectsContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 90%;
	& > main {
		width: 100%;
		align-items: center;
		justify-content: center;
		& > ul {
			border: 1px solid #eaeaea;
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;
			justify-content: center;
		}
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
			<main className=" ">
				{filterProjects.length > 0 ? (
					<ul>
						{filterProjects.map((project, index) => (
							<ProjectsCard project={project} key={index} />
						))}
					</ul>
				) : (
					<p>No projects found.</p>
				)}
			</main>
		</ProjectsContainer>
	);
};

export default HeaderProject;
