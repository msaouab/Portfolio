import styled from "styled-components";
import { ImgContainer } from "./ImgContainer";
import { SkillsCard } from "./SkillsCard";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const CardsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	text-align: center;
	gap: 2rem;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	max-width: 1000px;
	&:first-child {
		border: 2px solid black;
	}
	& > .projectInfo {
		min-width: 400px;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		& > .projectName {
		}
		& > .projectDescription {
			color: gray;
		}
		& > .links {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1rem;
			width: 100%;
			& > a {
				padding: 0.5rem 1rem;
				color: #000;
				display: flex;
				justify-content: center;
				gap: 0.3rem;
				text-decoration: none;
				font-weight: 700;
				transition: text-shadow 0.2s ease-in-out;
				&:hover {
					color: var(--text-color);
					text-shadow: 0 10px 0px rgba(0, 0, 0, 0.1);
				}
			}
		}
	}
`;

const ProjectsCard = (project: any, key: number) => {
	const { name, image, demo, code, icon, description, skills } =
		project.project;

	return (
		<CardsContainer>
			<ImgContainer source={image} alt={name} />
			<div className="projectInfo">
				<h3 className="projectName">
					{name} <span className="icon">{icon}</span>
				</h3>
				<p className="projectDescription">{description}</p>
				<SkillsCard skills={skills}></SkillsCard>
				<div className="links">
					{code && (
						<a href={code} target="_blank">
							{<FaGithub />} Code
						</a>
					)}
					{demo && (
						<a href={demo} target="_blank">
							{<GoLinkExternal />} Demo
						</a>
					)}
				</div>
			</div>
		</CardsContainer>
	);
};

export default ProjectsCard;
