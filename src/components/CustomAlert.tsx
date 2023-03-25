import React from 'react';
// import './CustomAlert.css';
import styled from 'styled-components';

const AlertStyle = styled.div `
	.custom-alert {
		background-color: #FFF4E0;
		color: black;
		text-align: center;
		font-size: 18px;
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