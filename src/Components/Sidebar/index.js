import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { SidebarContainer, Icon, SidebarWrapper, SidebarMenu, SidebarLink } from './sidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<>
			<SidebarContainer isOpen={isOpen} onClick={toggle}>
				<Icon onClick={toggle}>
					<FontAwesomeIcon icon={faTimesCircle} />
				</Icon>
				<SidebarWrapper>
					<SidebarMenu>
						<SidebarLink to='home' onClick={toggle}>
							Home
						</SidebarLink>
						<SidebarLink to='services' onClick={toggle}>
							Services
						</SidebarLink>
						<SidebarLink to='works' onClick={toggle}>
							Our Works
						</SidebarLink>
						<SidebarLink to='clients' onClick={toggle}>
							Clients
						</SidebarLink>
						<SidebarLink to='contact' onClick={toggle}>
							Contact
						</SidebarLink>
					</SidebarMenu>
				</SidebarWrapper>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;
