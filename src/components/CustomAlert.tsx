import React from 'react';
// import './CustomAlert.css';
import styled from 'styled-components';

const AlertStyle = styled.div `
	.custom-alert {
		background-color: #dc3545;
		color: white;
		text-align: center;
		font-size: 18px;
		display: flex;
		justify-content: center;
		padding: 5px;
		p {
			width: 800px;
		}
	}
`;

interface CustomAlertProps {
  message: string;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message }) => {
  return (
	<AlertStyle>
    	<div className="custom-alert">
    	  <p>{message}</p>
    	</div>
	</AlertStyle>
  );
};

export default CustomAlert;