import styled from 'styled-components';

export const TeamWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 24px 20px;
`;

export const TeamContainer = styled.div`
	width: 100%;
	margin: 10px;
	max-width: 1100px;
	display: flex;
	flex-direction: row;
	justify-content: center;

	@media screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
	}
`;

export const TeamTextWrapper = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 20px auto;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const TeamRed = styled.small`
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	color: #eb5757;
	width: 70%;
`;

export const TeamH2 = styled.h2`
	font-weight: 500;
	font-size: 36px;
	line-height: 54px;
	width: 70%;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const TeamSmall = styled.small`
	font-size: 16px;
	line-height: 24px;
	color: #4f4f4f;
	width: 70%;
`;

export const TeamImgWrapper = styled.div`
	width: 60%;
	display: flex;
	flex-direction: row-reverse;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const WrapImg1 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 10px;
`;

export const WrapImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ImgTeam1 = styled.img`
	width: 300px;
	height: 300px;
	border-radius: 24px;
	margin: 10px;

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 50%;
	}
`;

export const ImgTeam2 = styled.img`
	width: 300px;
	height: 300px;
	border-radius: 24px;
	margin: 10px;

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 50%;
	}
`;

export const ImgTeam3 = styled.img`
	width: 300px;
	height: 300px;
	border-radius: 24px;
	margin: 0 10px;

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 50%;
	}
`;
