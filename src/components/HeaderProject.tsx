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
		color: var(--text-color);
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
}

const HeaderProject: React.FC<ProjectsProps> = ({ projects }) => {

	return (
		<ProjectsContainer>
			
		</ProjectsContainer>
	);
};

export default HeaderProject;
