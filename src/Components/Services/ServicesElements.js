import styled from 'styled-components';

export const ServicesWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 24px 20px;

	@media screen and (max-width: 768px) {
		padding: 24px 0px;
	}
`;

export const ServicesContainer = styled.div`
	${'' /* border: 1px solid green; */}
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1100px;
	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

export const TitleServices = styled.h3`
	${'' /* border: 1px dashed red; */}
	font-weight: 500;
	font-size: 36px;
	line-height: 54px;
	width: 30%;

	@media screen and (max-width: 768px) {
		font-size: 24px;
		line-height: 36px;
		width: 70%;
	}
`;

export const CardWrapper = styled.div`
	${'' /* border: 1px solid brown; */}
	display: flex;
	justify-content: space-around;
	padding: 20px 0;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const Card = styled.div`
	width: 320px;
	height: 380px;
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
	border-radius: 24px;
	cursor: pointer;

	&:hover {
		box-shadow: 0px 10px 30px rgba(51, 51, 51, 0.1);
		transform: scale(1.02);
		transition: all 0.3s ease-in-out;
	}
`;

export const Icon = styled.div.attrs((props) => ({
	background: props.color,
}))`
	width: 67px;
	height: 67px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	background: ${(props) => props.color};
	color: #fff;
	font-size: 1.5rem;
`;

export const TitleCard = styled.h4`
	font-size: 1.5rem;
	line-height: 36px;
	font-weight: bold;
`;

export const TextCard = styled.div`
	font-size: 0.8rem;
	line-height: 24px;
	color: #4f4f4f;
`;

export const BtnWrapper = styled.div``;
