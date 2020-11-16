import styled from 'styled-components';

export const WorksWrapper = styled.div`
	${'' /* border: 1px solid red; */}
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 24px 0;
`;
export const WorksContainer = styled.div`
	${'' /* border: 1px solid navy; */}
	width: 100%;
	max-width: 1100px;
`;

export const TitleWorks = styled.h3`
	${'' /* border: 1px solid blue; */}
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
	${'' /* border: 1px solid green; */}
	display: grid;
	grid-template-columns: repeat(12, 90px);
	grid-template-rows: repeat(12, 90px);

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		padding: 0 10px;
	}
`;

export const WorksImageWrapper = styled.div.attrs((props) => ({
	column: props.column,
	row: props.row,
}))`
	${'' /* border: 1px solid gold; */}
	width: 530px;
	height: 530px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	grid-column: ${(props) => props.column};
	grid-row: ${(props) => props.row};

	@media screen and (max-width: 768px) {
		width: 95%;
		height: 100%;
	}
`;

export const ImageWork = styled.img`
	${'' /* border: 1px solid aliceblue; */}
	height: 80%;
	width: 100%;
	border-radius: 12px;
`;

export const SmallWorks = styled.small`
	${'' /* border: 1px solid cadetblue; */}
	color: #828282;
	font-weight: 300;
	font-size: 14px;
	line-height: 21px;
`;

export const WorksH4 = styled.h4`
	${'' /* border: 1px solid violet; */}
	font-weight: 500;
	font-size: 24px;
	line-height: 36px;
`;
