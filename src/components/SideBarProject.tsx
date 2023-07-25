import React, { useState } from "react";
import styled from "styled-components";

const SideBar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 90%;
	margin: auto;
	& > .technologies {
		border: 1px solid #ffffff;
		height: 50px;
		color: #fff;
		text-decoration: none;
		display: flex;
		align-items: center;
		padding: 0 1rem;
		transition: background-color 1s ease-in-out;
	}
	& > .technologies:hover, .technologies.active {
		transition: background-color 0.5s ease-in-out;
		background-color: #eaeaea;
		color: #000;
		cursor: pointer;
	}
`;


interface TechnologiesProps {
	technologies: string[];
	onSelectTech: (technology: string) => void;
}

const SideBarProject: React.FC<TechnologiesProps> = ({
	technologies,
	onSelectTech,
}) => {
	const [activeLink, setActiveLink] = useState(-1);

	const handleSelect = (index: number) => {
		setActiveLink(index);
		onSelectTech(technologies[index]);
	};

	return (
		<SideBar>
			<div className="Bar"></div>
			{technologies.map((elem, index) => (
				<div
					key={index}
					className={`technologies ${
						activeLink === index ? "active" : ""
					}`}
					onClick={() => {
						handleSelect(index);
					}}
				>
					{elem}
				</div>
			))}
		</SideBar>
	);
};

export default SideBarProject;
