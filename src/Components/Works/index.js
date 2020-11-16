import React from 'react';
import Img1 from '../../img/smarthome.jpg';
import Img2 from '../../img/onboard.png';
import Img3 from '../../img/booking.png';
import Img4 from '../../img/juice-product.png';

import {
	GalleryWrapper,
	ImageWork,
	SmallWorks,
	TitleWorks,
	WorksContainer,
	WorksH4,
	WorksImageWrapper,
	WorksWrapper,
} from './WorksElements';

const Works = () => {
	return (
		<>
			<WorksWrapper>
				<WorksContainer>
					<TitleWorks>Good design means good business</TitleWorks>
					<GalleryWrapper>
						<WorksImageWrapper column='1/ span 5' row='2 /span 6'>
							<ImageWork src={Img1} />
							<SmallWorks>Full stack application</SmallWorks>
							<WorksH4>Smart home dashboard</WorksH4>
						</WorksImageWrapper>
						<WorksImageWrapper column='7' row='1 /span 5'>
							<ImageWork src={Img2} />
							<SmallWorks>Full stack application</SmallWorks>
							<WorksH4>Smart home dashboard</WorksH4>
						</WorksImageWrapper>
						<WorksImageWrapper column='1 / span 5' row='8/span 12'>
							<ImageWork src={Img3} />
							<SmallWorks>Full stack application</SmallWorks>
							<WorksH4>Smart home dashboard</WorksH4>
						</WorksImageWrapper>
						<WorksImageWrapper column='7' row='7'>
							<ImageWork src={Img4} />
							<SmallWorks>Full stack application</SmallWorks>
							<WorksH4>Smart home dashboard</WorksH4>
						</WorksImageWrapper>
					</GalleryWrapper>
				</WorksContainer>
			</WorksWrapper>
		</>
	);
};

export default Works;
