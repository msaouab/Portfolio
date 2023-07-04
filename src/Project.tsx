import styled from "styled-components";
import Background from "/Background.jpeg";
import ProjectCover from "/ProjectCover.jpeg";

const ProjectContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	/* height: 100vh; */
	background-image: url(${ProjectCover});
	background-position: center;
`;

const NavProject = styled.nav`
	display: flex;
	flex-direction: column;
`;

const Project = () => {
	return (
		<ProjectContainer>
			<h1>Projects</h1>
			<NavProject>
				<li>Project 1</li>
				<li>Project 2</li>
				<li>Project 3</li>
			</NavProject>
		</ProjectContainer>
	);
};

export default Project;
