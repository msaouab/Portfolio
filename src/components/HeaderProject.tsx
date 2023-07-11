import styled from "styled-components";
import ProjectsCard from "./ProjectsCard";

const ProjectsContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 90%;
	margin: auto;
	& > main {
		width: 100%;
		align-items: center;
		justify-content: center;
		& > ul {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
			gap: 1rem;
		}
		& > .notfund {
			color: #fff;
			text-align: center;
			font-size: 1.5rem;
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
			<main>
				{filterProjects.length > 0 ? (
					<ul>
						{filterProjects.map((project, index) => (
							<ProjectsCard project={project} key={index} />
						))}
					</ul>
				) : (
					<p className="notfund">No projects found.</p>
				)}
			</main>
		</ProjectsContainer>
	);
};

export default HeaderProject;
