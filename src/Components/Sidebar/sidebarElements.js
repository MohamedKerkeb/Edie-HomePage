import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #fff;
	display: grid;
	align-items: center;
	top: 0;
	right: 0;
	transition: 0.5s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Icon = styled.div`
	color: #333333;
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;

	&:hover {
		color: #2d9cdb;
	}
`;

export const SidebarWrapper = styled.div`
	color: #333333;
`;

export const SidebarMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;

	@media screen and (max-width: 768px) {
		grid-template-rows: repeat(6, 60px);
	}
`;

export const SidebarLink = styled(LinkScroll)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: #333333;
	cursor: pointer;

	&:hover {
		color: #2d9cdb;
		transition: 0.2s ease-in-out;
	}
`;
