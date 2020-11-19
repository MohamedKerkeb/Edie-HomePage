import styled from 'styled-components';

export const ClientWrapper = styled.div`
	${'' /* border: 1px solid red; */}
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 24px 0;
`;

export const ClientContainer = styled.div`
	${'' /* border: 1px solid red; */}
	width: 100%;
	margin: 10px;
	max-width: 1100px;
`;

export const ClientText = styled.div`
	${'' /* border: 1px solid red; */}
	font-weight: 500;
	font-size: 36px;
	line-height: 54px;
	width: 80%;

	@media screen and (max-width: 768px) {
		font-size: 24px;
		line-height: 36px;
		width: 100%;
	}
`;

export const ClientCard = styled.div`
	${'' /* border: 1px solid red; */}
	display: flex;
	justify-content: flex-start;
	margin: 20px 0;
`;

export const ClientCardText = styled.div`
	${'' /* border: 1px solid red; */}
	padding: 20px;

	> h3 {
		font-weight: 500;
		font-size: 24px;
		line-height: 36px;
	}

	> small {
		font-weight: 500;
		font-size: 18px;
		line-height: 27px;
		color: #828282;
	}
`;

export const ClientImg = styled.img`
	${'' /* border: 1px solid red; */}
	height: 100px;
	width: 100px;
	border-radius: 24px;
`;
