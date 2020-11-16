import React from 'react';
import headerImg from '../../img/heroImage.jpg';
import Input from '../Elements/Input';

import {
	HeaderWrapper,
	Headerh2,
	HeaderContainer,
	HeaderContent,
	HeaderSmall,
	HeaderP,
	HeaderImg,
	StoryContent,
	Img,
} from './HeaderElements';

const Header = () => {
	return (
		<>
			<HeaderWrapper>
				<HeaderContainer>
					<HeaderContent>
						<HeaderSmall>Unhappy with our website?</HeaderSmall>
						<Headerh2>We Create beautiful and fast web services.</Headerh2>
					</HeaderContent>
					<HeaderImg>
						<Img src={headerImg} alt='header' />
					</HeaderImg>
					<HeaderContent>
						<Headerh2>Unhappy with our website?</Headerh2>
						<HeaderP>
							We help transform your ideas into real world applications that will outperform your toughest competition
							and help you achieve your strategic goals in short period of time.
						</HeaderP>
					</HeaderContent>
					<StoryContent>
						<HeaderP>Want us to contact you?</HeaderP>
						<Input />
					</StoryContent>
				</HeaderContainer>
			</HeaderWrapper>
		</>
	);
};

export default Header;
