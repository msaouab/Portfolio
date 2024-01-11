import styled from "styled-components";
import { SkillsProps } from "../_types/types";

const CardStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-wrap: wrap;
	gap: 1rem;
	& > .skill-name {
		padding: 10px;
		border: 1px solid #ccc;
		box-shadow: 0 0 10px rgba(0,0,0,.1);
	}
`;

export const SkillsCard = ({ skills }: SkillsProps) => {
	return (
		<CardStyle className="skill">
			{skills.map((skill: string, index: number) => (
				<p className="skill-name" key={index}>
					{skill}
				</p>
			))}
		</CardStyle>
	);
};
