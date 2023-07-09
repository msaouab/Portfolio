import React, { useState } from "react";
import styled from "styled-components";
import About from "../Profile";
import ProjectsCard from "./ProjectsCard";

const SideBar = styled.div`
	/* border: 1px solid #eaeaea; */
	width: 15%;
	display: flex;
	flex-direction: column;
	& > .technologies {
		height: 50px;
		color: #fff;
		text-decoration: none;
		display: flex;
		align-items: center;
		padding-left: 10px;
	}
	& > .technologies:hover {
		background-color: #eaeaea;
		color: #000;
		cursor: pointer;
	}
	& > :first-child:hover {
		border-radius: 8px 0 0 0;
	}
	& > :last-child:hover {
		border-radius: 0 0 0 8px;
	}
`;

interface TechnologiesProps {
	technologies: string[];
	onSelectTech: (technology: string) => void;
}

const SideBarProject: React.FC<TechnologiesProps> = ({ technologies, onSelectTech }) => {
	const [activeLink, setActiveLink] = useState(0);

	const handleSelect = (index: number) => {
		setActiveLink(index);
		onSelectTech(technologies[index]);
	};

	return (
		<SideBar>
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
