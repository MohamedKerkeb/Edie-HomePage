import React from 'react';
import InputGlobal from '../Elements/Input';
import { animateScroll as scroll } from 'react-scroll';

import Insta from '../../img/instagram.svg';
import Linkedin from '../../img/linkedin.svg';
import Twitter from '../../img/twitter.svg';

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
	FooterRight,
} from './FooterElements';

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<>
			<FooterWrapper>
				<FooterContainer>
					<FooterNav>
						<FooterItem>
							<FooterLink to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
								Home
							</FooterLink>
						</FooterItem>
						<FooterItem>
							<FooterLink to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
								Services
							</FooterLink>
						</FooterItem>
						<FooterItem>
							<FooterLink to='works' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
								Our Works
							</FooterLink>
						</FooterItem>
						<FooterItem>
							<FooterLink to='clients' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
								Clients
							</FooterLink>
						</FooterItem>
						<FooterItem>
							<FooterLink to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
								Contact
							</FooterLink>
						</FooterItem>
					</FooterNav>
					<FooterSocial>
						<FooterLogo to='/' onClick={toggleHome}>
							Edie
						</FooterLogo>
						<FooterIconSocial>
							<FooterIcon>
								<img src={Insta} />
							</FooterIcon>
							<FooterIcon>
								<img src={Linkedin} />
							</FooterIcon>
							<FooterIcon>
								<img src={Twitter} />
							</FooterIcon>
						</FooterIconSocial>
					</FooterSocial>
					<FooterInput>
						<InputGlobal />
					</FooterInput>
				</FooterContainer>
				<FooterRight>
					<p>Mohamed@DevChallanges.io</p>
				</FooterRight>
			</FooterWrapper>
		</>
	);
};

export default Footer;
