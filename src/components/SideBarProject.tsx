import React, { useState } from "react";
import styled from "styled-components";

const SideBar = styled.div`
	display: flex;
	flex-direction: column;
	& > .technologies {
		height: 50px;
		color: #fff;
		text-decoration: none;
		display: flex;
		align-items: center;
		padding: 0 1rem;
	}
	& > .technologies:hover {
		background-color: #eaeaea;
		color: #000;
		cursor: pointer;
	}
	@media (max-width: 1000px) {
		border: 1px solid #fff;
		width: 100%;
		flex-direction: row;
		overflow-x: auto;
		scrollbar-color: #ffffff #242020;
		scrollbar-width: auto;
		justify-content: space-between;
		/* gap: 0.1rem; */
		& > .technologies {
			border-radius: 0px;
			padding: 0 0.5rem;
		}
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
