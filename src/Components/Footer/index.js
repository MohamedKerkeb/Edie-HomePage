import React from 'react';
import InputGlobal from '../Elements/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMosque } from '@fortawesome/free-solid-svg-icons';

import {
	FooterWrapper,
	FooterContainer,
	FooterIcon,
	FooterIconSocial,
	FooterInput,
	FooterItem,
	FooterLink,
	FooterLogo,
	FooterNav,
	FooterSocial,
} from './FooterElements';

const Footer = () => {
	return (
		<>
			<FooterWrapper>
				<FooterContainer>
					<FooterNav>
						<FooterItem>
							<FooterLink to=''>Home</FooterLink>
						</FooterItem>
						<FooterItem>
							<FooterLink to=''>Services</FooterLink>
						</FooterItem>
						<FooterItem>
							<FooterLink to=''>Our Works</FooterLink>
						</FooterItem>
						<FooterItem>
							<FooterLink to=''>Clients</FooterLink>
						</FooterItem>
						<FooterItem>
							<FooterLink to=''>Contact</FooterLink>
						</FooterItem>
					</FooterNav>
					<FooterSocial>
						<FooterLogo>Edie</FooterLogo>
						<FooterIconSocial>
							<FooterIcon>
								<FontAwesomeIcon icon={faMosque} />
							</FooterIcon>
							<FooterIcon>
								<FontAwesomeIcon icon={faMosque} />
							</FooterIcon>
							<FooterIcon>
								<FontAwesomeIcon icon={faMosque} />
							</FooterIcon>
						</FooterIconSocial>
					</FooterSocial>
					<FooterInput>
						<InputGlobal />
					</FooterInput>
				</FooterContainer>
			</FooterWrapper>
		</>
	);
};

export default Footer;
