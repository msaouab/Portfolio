import styled from "styled-components";
import SideBarProject from "../components/SideBarProject";
import HeaderProject from "../components/HeaderProject";
import { useState } from "react";
import { Technologies, projects } from "../data/ProjectData";

const ProjectContainer = styled.main`
	display: flex;
	flex-direction: column;
	gap: 4rem;
`;

const Project = () => {
	const [selected, setSelected] = useState<string | null>(null);

	const handleSelect = (technology: string) => {
		setSelected(technology);
	};

	return (
		<ProjectContainer>
				<SideBarProject
					technologies={Technologies}
					onSelectTech={handleSelect}
				/>
				<HeaderProject projects={projects} selected={selected} />
		</ProjectContainer>
	);
};

export default Project;
