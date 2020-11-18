import styled from 'styled-components';

export const TeamWrapper = styled.div`
	${'' /* border: 1px solid red; */}
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 24px 0;
`;

export const TeamContainer = styled.div`
	${'' /* border: 1px solid red; */}
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
	${'' /* border: 1px solid navy; */}
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
	${'' /* border: 1px solid red; */}
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	color: #eb5757;
	width: 70%;
`;

export const TeamH2 = styled.h2`
	${'' /* border: 1px solid red; */}
	font-weight: 500;
	font-size: 36px;
	line-height: 54px;
	width: 70%;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const TeamSmall = styled.small`
	${'' /* border: 1px solid red; */}
	font-size: 16px;
	line-height: 24px;
	color: #4f4f4f;
	width: 70%;
`;

export const TeamImgWrapper = styled.div`
	${'' /* border: 1px solid navy; */}
	width: 60%;
	${'' /* display: grid;
	grid-template-columns: repeat(12, 50px);
	grid-template-rows: repeat(12, 50px);
	gap: 5px; */}
	display: flex;
	flex-direction: row-reverse;

	@media screen and (max-width: 768px) {
		width: 100%;
		${'' /* gap: 10px; */}
	}
`;

export const WrapImg1 = styled.div`
	${'' /* border: 1px solid navy; */}
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 10px;
`;

export const WrapImg = styled.div`
	${'' /* border: 1px solid navy; */}
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ImgTeam1 = styled.img`
	${'' /* border: 1px solid red; */}
	width: 300px;
	height: 300px;
	border-radius: 24px;
	margin: 10px;
	${'' /* grid-column: 7 / 12;
	grid-row: 1; */}
	@media screen and (max-width: 768px) {
		width: 100%;
		height: 50%;
	}
`;

export const ImgTeam2 = styled.img`
	${'' /* border: 1px solid red; */}
	width: 300px;
	height: 300px;
	border-radius: 24px;
	margin: 10px;
	${'' /* grid-column: 7;
	grid-row: 7; */}

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 50%;
	}
`;

export const ImgTeam3 = styled.img`
	${'' /* border: 1px solid red; */}
	width: 300px;
	height: 300px;
	border-radius: 24px;
	margin: 0 10px;
	${'' /* grid-column: 1;
	grid-row: 5; */}

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 50%;
	}
`;
