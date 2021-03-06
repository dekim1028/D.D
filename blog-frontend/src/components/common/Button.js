import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonStyle = css`
	background-color: #045fb4;
	border: none;
	outline: none;
	cursor: pointer;
	color: white;
	border-radius: 4px;
	font-weight: bold;
	font-size: 15px;
	width: 90px;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background-color: #0174df;
	}

	&:disabled {
		background: #a4a4a4;
		cursor: not-allowed;
	}
`;

const customStyle = css`
	${(props) =>
		props.color1 &&
		css`
			background: #585858;
			&:hover {
				background: #848484;
			}
		`}
`;

const ButtonBlock = styled.button`
	${ButtonStyle}
	${customStyle}

    ${(props) =>
		props.width &&
		css`
			width: ${props.width};
		`}
    ${(props) =>
		props.height &&
		css`
			height: ${props.height};
		`}
`;

const LinkBlock = styled(Link)`
	${ButtonStyle}
	${customStyle}

    ${(props) =>
		props.width &&
		css`
			width: ${props.width};
		`}

    ${(props) =>
		props.height &&
		css`
			height: ${props.height};
		`}
`;

const Button = (props) => {
	return props.to ? <LinkBlock {...props} /> : <ButtonBlock {...props} />;
};

export default Button;
