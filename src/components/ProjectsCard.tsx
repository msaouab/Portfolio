import { useEffect, useState } from "react";
import styled from "styled-components";
import { ImgContainer } from "./ImgContainer";
import { SkillsCard } from "./SkillsCard";

const CardsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	gap: 2rem;
	width: 100%;
	box-shadow: 0 0 10px rgba(0,0,0,.2);
	border-radius: 1rem;
	& > .projectInfo {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		flex-direction: column;
		& > .projectName {
		}
		& > .projectDescription {
		}
	}
`;

const ProjectsCard = (project: any, key: number) => {
	const { name, image, link, icon, description, skills } = project.project;

	// console.log(project);

	return (
		<CardsContainer className="">
			<ImgContainer source={image} alt={name} />
			<div className="projectInfo">
				<h3 className="projectName">
					{name} <span className="icon">{icon}</span>
				</h3>
				<p className="projectDescription">{description}</p>
				<SkillsCard skills={skills}></SkillsCard>
			</div>
		</CardsContainer>
	);
};

export default ProjectsCard;
