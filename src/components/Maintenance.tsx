import styled from "styled-components";

export const Style = styled.div`
	padding: 1rem;
	background-color: #ff5f56;
	color: white;
	text-align: center;
	font-weight: 700;
	font-size: 1rem;
`;

export const Maintenance = () => {
	return (
		<Style>
			<p>🔧 **Under Maintenance** 🔧</p> Currently making improvements to
			enhance your experience. Apologies for any inconvenience. I will be
			back shortly!
		</Style>
	);
};
