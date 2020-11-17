import React from 'react';

import Perso1 from '../../img/person1.png';
import Perso2 from '../../img/person2.png';
import Perso3 from '../../img/person3.png';

import {
	ImgTeam1,
	ImgTeam2,
	ImgTeam3,
	TeamContainer,
	TeamH2,
	TeamImgWrapper,
	TeamRed,
	TeamSmall,
	TeamTextWrapper,
	TeamWrapper,
} from './TeamElements';

const Team = () => {
	return (
		<>
			<TeamWrapper>
				<TeamContainer>
					<TeamTextWrapper>
						<TeamRed>Meet the theam</TeamRed>
						<TeamH2>We are chilled and a laidback team</TeamH2>
						<TeamSmall>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</TeamSmall>
					</TeamTextWrapper>
					<TeamImgWrapper>
						<ImgTeam1 src={Perso1} />
						<ImgTeam2 src={Perso2} />
						<ImgTeam3 src={Perso3} />
					</TeamImgWrapper>
				</TeamContainer>
			</TeamWrapper>
		</>
	);
};

export default Team;
