import React from 'react';

import Perso4 from '../../img/person4.png';

import { ClientCard, ClientCardText, ClientContainer, ClientImg, ClientText, ClientWrapper } from './ClientElements';

const Client = () => {
	return (
		<>
			<ClientWrapper>
				<ClientContainer id='clients'>
					<ClientText>
						<p>
							“Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented
							team.”
						</p>
					</ClientText>
					<ClientCard>
						<ClientImg src={Perso4} />
						<ClientCardText>
							<h3>Carlos Tran</h3>
							<small>The Decorate Gatsby</small>
						</ClientCardText>
					</ClientCard>
				</ClientContainer>
			</ClientWrapper>
		</>
	);
};

export default Client;
