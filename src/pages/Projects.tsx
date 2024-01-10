import styled from "styled-components";
import { Projects } from "../data/ProjectData";
import ProjectsCard from "../components/ProjectsCard";

const ProjectContainer = styled.main`
	ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5rem;
		max-width: 1000px;
		margin: 0 auto;
	}
`;

const Project = () => {
	return (
		<ProjectContainer>
			{Projects.length > 0 ? (
				<ul>
					{Projects.map((project, index) => (
						<ProjectsCard project={project} key={index} />
					))}
				</ul>
			) : (
				<p className="notfund">No projects found.</p>
			)}
		</ProjectContainer>
	);
};

export default Project;
