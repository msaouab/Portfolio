import styled from "styled-components";
import { ImgContainer } from "./ImgContainer";
import { SkillsCard } from "./SkillsCard";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const CardsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	text-align: center;
	gap: 2rem;
	box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
	border-radius: 15px;
	padding: 1rem;
	& > .projectInfo {
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
	@media (max-width: 700px) {
		grid-template-columns: 1fr;
		& > .projectInfo {
			gap: 1rem;
		}
	}
`;

const ProjectsCard = (project: any) => {
	const { name, image, demo, code, icon, description, skills, imgType } =
		project.project;

	return (
		<CardsContainer className="">
			<ImgContainer source={image} alt={name} imgType={imgType} widthImg={460}/>
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
