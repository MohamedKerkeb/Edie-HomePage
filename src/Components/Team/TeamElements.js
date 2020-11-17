import styled from 'styled-components';

export const TeamWrapper = styled.div`
	${'' /* border: 1px solid red; */}
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 24px 0;
`;

export const TeamContainer = styled.div`
	border: 1px solid red;
	width: 100%;
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
	display: grid;
	grid-template-columns: repeat(6, 110px);
	grid-template-rows: repeat(6, 110px);
	${'' /* gap: 10px; */};

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(6, 50px);
		grid-template-rows: repeat(6, 50px);
		width: 100%;
		gap: 10px;
	}
`;

export const ImgTeam1 = styled.img`
	${'' /* border: 1px solid red; */}
	width: 300px;
	height: 300px;
	border-radius: 24px;
	grid-column: 4 / span 6;
	grid-row: 1/3;
	@media screen and (max-width: 768px) {
		width: 100%;
		height: 100%;
		grid-column: 4 / 6;
		grid-row: 1/4;
	}
`;

export const ImgTeam2 = styled.img`
	${'' /* border: 1px solid red; */}
	width: 300px;
	height: 300px;
	border-radius: 24px;
	grid-column: 4 / 6;
	grid-row: 4/6;

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 100%;
		grid-column: 3 / 6;
		grid-row: 4 / span 6;
	}
`;

export const ImgTeam3 = styled.img`
	${'' /* border: 1px solid red; */}
	width: 300px;
	height: 300px;
	border-radius: 24px;
	grid-column: 1;
	grid-row: 3;

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 100%;
		grid-column: 2 / span 3;
		grid-row: 1/2;
	}
`;
