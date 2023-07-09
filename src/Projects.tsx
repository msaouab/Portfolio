import styled from "styled-components";
import HeaderProject from "./components/HeaderProject";
import SideBarProject from "./components/SideBarProject";
import { useState } from "react";
import { Technologies, projects } from "./components/projects/ProjectData";

const ProjectContainer = styled.main`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 90%;
	margin: auto;
	gap: 2rem;
	& > h1 {
		text-align: center;
		color: #fff;
		font-size: 4rem;
	}
	& > section {
		border: 1px solid #eaeaea;
		display: flex;
		width: 100%;
	}
`;

const Project = () => {
	const [selected, setSelected] = useState<string | null>(null);

	const handleSelect = (technology: string) => {
		setSelected(technology);
	};

	return (
		<ProjectContainer>
			<h1>Projects</h1>
			<section>
				<SideBarProject
					technologies={Technologies}
					onSelectTech={handleSelect}
				/>
				<HeaderProject projects={projects} selected={selected} />
			</section>
		</ProjectContainer>
	);
};

export default Project;
