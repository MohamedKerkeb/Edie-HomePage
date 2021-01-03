import styled from 'styled-components';

export const WorksWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 24px 20px;

	@media screen and (max-width: 768px) {
		padding: 24px 0px;
	}
`;
export const WorksContainer = styled.div`
	width: 100%;
	max-width: 1100px;
`;

export const TitleWorks = styled.h3`
	font-weight: 500;
	font-size: 36px;
	line-height: 54px;
	width: 40%;
	padding: 20px 0;

	@media screen and (max-width: 768px) {
		font-size: 24px;
		line-height: 36px;
		width: 80%;
		padding: 20px;
	}
`;

export const GalleryWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(10, 100px);
	grid-template-rows: repeat(10, 100px);
	grid-gap: 10px;

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		padding: 0 10px;
		width: 100%;
	}

	@media screen and (min-width: 768px) and (max-width: 1024px) {
		grid-template-columns: repeat(10, 90px);
		grid-template-rows: repeat(10, 90px);
	}
`;

export const WorksImageWrapper = styled.div.attrs((props) => ({
	column: props.column,
	row: props.row,
}))`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	grid-column: ${(props) => props.column};
	grid-row: ${(props) => props.row};
	width: 100%;

	@media screen and (max-width: 768px) {
		width: 95%;
		height: 100%;
	}
`;

export const ImageWork = styled.img`
	height: 90%;
	width: 100%;
	border-radius: 12px;
`;

export const SmallWorks = styled.small`
	color: #828282;
	font-weight: 300;
	font-size: 14px;
	line-height: 21px;
`;

export const WorksH4 = styled.h4`
	font-weight: 500;
	font-size: 24px;
	line-height: 36px;
`;
