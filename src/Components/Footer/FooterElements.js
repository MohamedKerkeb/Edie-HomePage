import styled from 'styled-components';

import { Link as LinkScroll } from 'react-scroll';

export const FooterWrapper = styled.div`
	background: #100e1d;
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 24px 20px;

	@media screen and (max-width: 768px) {
		padding: 24px 0px;
	}
`;

export const FooterContainer = styled.div`
	width: 100%;
	margin: 10px;
	max-width: 1100px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0 24px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const FooterNav = styled.div`
	width: 33%;
	font-size: 18px;
	line-height: 200%;

	@media screen and (max-width: 768px) {
		width: 100%;
		margin: 20px 0;
	}
`;

export const FooterItem = styled.div``;

export const FooterLink = styled(LinkScroll)`
	cursor: pointer;
`;

export const FooterSocial = styled.div`
	width: 33%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	@media screen and (max-width: 768px) {
		width: 100%;
		align-items: flex-start;
		margin: 20px 0;
	}
`;

export const FooterLogo = styled.div`
	font-weight: 800;
	font-size: 36px;
	line-height: 53px;
	cursor: pointer;
`;

export const FooterIconSocial = styled.div`
	display: flex;
`;
export const FooterIcon = styled.div`
	margin: 10px;
	cursor: pointer;
`;

export const FooterInput = styled.div`
	width: 33%;
	color: #828282;
	font-weight: 500;
	font-size: 14px;
	line-height: 21px;

	@media screen and (max-width: 768px) {
		width: 100%;
		margin: 20px 0;
		font-size: 10px;
		line-height: 15px;
	}
`;

export const FooterRight = styled.div`
	padding: 24px 0;
	margin: 10px auto;
`;
