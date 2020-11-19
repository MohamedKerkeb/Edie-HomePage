import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Burger, Menu, Item, Nav, NavLinks, NavbarContainer, Logo } from './NavbarElements';

const Navbar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<Logo>Edie</Logo>
					<Burger onClick={toggle}>
						<FontAwesomeIcon icon={faBars} />
					</Burger>
					<Menu>
						<Item>
							<NavLinks to='home'>Home</NavLinks>
						</Item>
						<Item>
							<NavLinks to='services'>Services</NavLinks>
						</Item>
						<Item>
							<NavLinks to='works'>Our Works</NavLinks>
						</Item>
						<Item>
							<NavLinks to='clients'>Clients</NavLinks>
						</Item>
						<Item>
							<NavLinks to='contact'>Contact</NavLinks>
						</Item>
					</Menu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
