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
							<NavLinks to=''>Home</NavLinks>
						</Item>
						<Item>
							<NavLinks to=''>Services</NavLinks>
						</Item>
						<Item>
							<NavLinks to=''>Our Works</NavLinks>
						</Item>
						<Item>
							<NavLinks to=''>Clients</NavLinks>
						</Item>
						<Item>
							<NavLinks to=''>Contact</NavLinks>
						</Item>
					</Menu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
