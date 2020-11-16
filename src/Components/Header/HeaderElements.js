import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	${'' /* border: 1px solid red; */}
	display: flex;
	justify-content: center;
	padding: 24px 0;
`;

export const HeaderContainer = styled.div`
	${'' /* border: 1px solid navy; */}
	width: 100%;
	max-width: 1100px;

	@media screen and (max-width: 768px) {
		margin: 0 10px;
	}
`;
export const HeaderContent = styled.div`
	${'' /* border: 1px solid yellow; */}
	width: 50%;
	margin-left: 150px;
	margin-bottom: 20px;

	@media screen and (max-width: 768px) {
		width: 90%;
		margin-left: 20px;
	}
`;

export const HeaderSmall = styled.div`
	${'' /* border: 1px solid green; */}
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	color: #2d9cdb;

	@media screen and (max-width: 768px) {
		font-size: 12px;
		line-height: 18px;
	}
`;

export const Headerh2 = styled.h2`
	${'' /* border: 1px solid gray; */}
	font-weight: 500;
	font-size: 48px;
	line-height: 72px;
	width: 100%;

	@media screen and (max-width: 768px) {
		font-size: 24px;
		line-height: 36px;
	}
`;

export const HeaderP = styled.p`
	color: #4f4f4f;
	font-size: 18px;
	line-height: 27px;
`;

export const HeaderImg = styled.div`
	${'' /* border: 1px solid brown; */}
	max-height: 330px;
	min-height: 120px;
`;

export const Img = styled.img`
	${'' /* border: 1px solid gold; */}
	border-radius: 18px;
	width: 100%;
	height: 100%;
`;

export const StoryContent = styled.div`
	width: 50%;
	margin-left: 150px;
	margin-bottom: 20px;

	@media screen and (max-width: 768px) {
		width: 90%;
		margin-left: 20px;
	}
`;
