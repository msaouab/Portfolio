import styled from "styled-components";
import ProjectsCard from "../components/ProjectsCard";
import { ProjectsData } from "../data/ProjectData";

const ProjectContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5rem;
	margin: 0 auto;
	padding: 2rem;
	max-width: 1000px;
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
