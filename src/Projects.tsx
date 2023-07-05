import styled from "styled-components";
import HeaderProject from "./components/HeaderProject";
import SideBarProject from "./components/SideBarProject";

const ProjectContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 90%;
	margin: auto;
	border-radius: 10px;
`;

const Project = () => {

	return (
		<ProjectContainer>
			<HeaderProject />
			<SideBarProject />
		</ProjectContainer>
	);
};

export default Project;
