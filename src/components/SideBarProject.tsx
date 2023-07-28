import { Button, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import React, { useState } from "react";
import styled from "styled-components";

const SideBar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

	& > Button {
		--b: 3px;
		--s: 0.45em;
		--color: #ffffff;

		padding: calc(0.5em + var(--s)) calc(0.9em + var(--s));
		color: var(--color);
		--_p: var(--s);
		background: conic-gradient(
				from 90deg at var(--b) var(--b),
				#0000 90deg,
				var(--color) 0
			)
			var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
			calc(100% - var(--b) - 2 * var(--_p));
		transition: 0.3s linear, color 0s, background-color 0s;
		outline-offset: 0.6em;
		border: 0;

		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		cursor: pointer;
		text-transform: capitalize;
	}

	& > Button:hover,
	& > Button:focus-visible {
		--_p: 0px;
		outline-color: var(--color);
		outline-offset: 0.05em;
	}

	& > Button:active {
		background: var(--color);
		color: #000000;
	}
`;

const StyledListItemIcon = styled(ListItemIcon)`
	& > svg {
		fill: white;
		color: white;
	}
`;

interface Technology {
	name: string;
	icon: any;
}

interface TechnologiesProps {
	technologies: Technology[];
	onSelectTech: (technology: string) => void;
}

const SideBarProject: React.FC<TechnologiesProps> = ({
	technologies,
	onSelectTech,
}) => {
	const [activeLink, setActiveLink] = useState(-1);
	const [open, setOpen] = useState(true);

	const handleSelect = (index: number) => {
		setActiveLink(index);
		onSelectTech(technologies[index].name);
	};

	const getList = () => (
		<div
			style={{ width: 250 }}
			className="list"
			onClick={() => setOpen(false)}
		>
			{technologies.map((item, index) => (
				<ListItem
					button
					key={index}
					onClick={() => handleSelect(index)}
					className="list-item"
				>
					<StyledListItemIcon>{item.icon}</StyledListItemIcon>
					<ListItemText primary={item.name} />
				</ListItem>
			))}
		</div>
	);

	return (
		<SideBar>
			<Button onClick={() => setOpen(true)}>Check The Techonology</Button>
			<Drawer
				open={open}
				anchor={"left"}
				onClose={() => setOpen(false)}
				className="drawer"
				PaperProps={{
					sx: {
						backgroundColor: "#242020",
						color: "white",
						justifyContent: "space-around",
					},
				}}
			>
				{getList()}
			</Drawer>
		</SideBar>
	);
};

export default SideBarProject;
