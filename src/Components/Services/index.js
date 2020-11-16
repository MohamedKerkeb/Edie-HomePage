import React from 'react';
import { Button } from '../Elements/Buttons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faAngleLeft, faAngleRight, faServer } from '@fortawesome/free-solid-svg-icons';

import {
	ServicesWrapper,
	ServicesContainer,
	TitleServices,
	CardWrapper,
	Card,
	Icon,
	TitleCard,
	TextCard,
	BtnWrapper,
} from './ServicesElements';

const Services = () => {
	return (
		<>
			<ServicesWrapper>
				<ServicesContainer>
					<TitleServices>We Offer high demand services</TitleServices>
					<CardWrapper>
						<Card>
							<Icon>
								<FontAwesomeIcon icon={faPen} />
							</Icon>
							<TitleCard>UI/UX Design</TitleCard>
							<TextCard>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. At labore cupiditate aspernatur eligendi quis
								nobis! Corrupti soluta corporis maiores eos?
							</TextCard>
							<BtnWrapper>
								<Button>Get started</Button>
							</BtnWrapper>
						</Card>
						<Card>
							<Icon>
								<FontAwesomeIcon icon={faAngleRight} />
							</Icon>
							<TitleCard>Front End</TitleCard>
							<TextCard>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. At labore cupiditate aspernatur eligendi quis
								nobis! Corrupti soluta corporis maiores eos?
							</TextCard>
							<BtnWrapper>
								<Button>Get started</Button>
							</BtnWrapper>
						</Card>
						<Card>
							<Icon>
								<FontAwesomeIcon icon={faServer} />
							</Icon>
							<TitleCard>Back End</TitleCard>
							<TextCard>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. At labore cupiditate aspernatur eligendi quis
								nobis! Corrupti soluta corporis maiores eos?
							</TextCard>
							<BtnWrapper>
								<Button>Get started</Button>
							</BtnWrapper>
						</Card>
					</CardWrapper>
				</ServicesContainer>
			</ServicesWrapper>
		</>
	);
};

export default Services;
