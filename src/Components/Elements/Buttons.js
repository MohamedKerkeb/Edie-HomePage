import styled from 'styled-components';

export const Button = styled.button`
	border: none;
	border-radius: 12px;
	background: ${({ primary }) => (primary ? '#2D9CDB' : '#E0E0E0')};
	padding: ${({ big }) => (big ? '11px 28px' : '9px 12px')};
	color: ${({ primary }) => (primary ? '#fff' : '#828282')};
	font-size: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:hover {
		background: #2d9cdb;
		color: #fff;
	}
`;
