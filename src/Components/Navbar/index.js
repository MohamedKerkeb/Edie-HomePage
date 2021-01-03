import React, { useEffect, useState } from 'react';

import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Burger, Menu, Item, Nav, NavLinks, NavbarContainer, Logo } from './NavbarElements';

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	});

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<Nav>
				<NavbarContainer>
					<Logo to='/' onClick={toggleHome}>
						Edie
					</Logo>
					<Burger onClick={toggle}>
						<FontAwesomeIcon icon={faBars} />
					</Burger>
					<Menu>
						<Item>
							<NavLinks to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
								Home
							</NavLinks>
						</Item>
						<Item>
							<NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
								Services
							</NavLinks>
						</Item>
						<Item>
							<NavLinks to='works' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
								Our Works
							</NavLinks>
						</Item>
						<Item>
							<NavLinks to='clients' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
								Clients
							</NavLinks>
						</Item>
						<Item>
							<NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
								Contact
							</NavLinks>
						</Item>
					</Menu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
