import styled from "styled-components";
import ProjectsCard from "../components/ProjectsCard";
import { ProjectsData } from "../data/ProjectData";

const ProjectContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5rem;
	max-width: 800px;
	margin: 0 auto;
`;

const Project = () => {
	return (
		<ProjectContainer>
			{ProjectsData.map((project, index) => (
				<ProjectsCard project={project} key={index} />
			))}
		</ProjectContainer>
	);
};

export default Project;
