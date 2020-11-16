import styled from 'styled-components';

export const Nav = styled.nav`
	background: #fff;
	height: 70px;
	display: flex;
	justify-content: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 70px;
	z-index: 1;
	width: 100%;
	max-width: 1100px;
	padding: 0 24px;
`;

export const Logo = styled.h1`
	color: #333333;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;

	&:hover {
		color: #2d9cdb;
	}
`;

export const Burger = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		height: 70px;
		tranform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: #333333;
		padding: 10px;
		display: flex;
		align-items: center;
	}

	&:hover {
		color: #2d9cdb;
	}
`;

export const Menu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const Item = styled.li`
	height: 70px;
`;

export const NavLinks = styled.a`
	color: #333333;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&:hover {
		color: #2d9cdb;
	}

	&.active {
		border-bottom: 3px solid #01bf71;
	}
`;
