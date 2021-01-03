import React from 'react';
import styled from 'styled-components';
import { Button } from './Buttons';

const Form = styled.form`
	${'' /* border: 1px solid red; */}
`;

const InputWrapper = styled.div`
	${'' /* border: 1px dashed navy; */}
	display: flex;
	background: #f2f2f2;
	border-radius: 12px;
	width: 100%;
	height: 55px;
	padding-left: 10px;
	margin: 10px auto;
`;

const Input = styled.input`
	border: none;
	background: #f2f2f2;
	width: 100%;
`;

const InputGlobal = () => {
	return (
		<>
			<Form>
				<p>Want us to contact you?</p>
				<InputWrapper>
					<Input placeholder='Email' />
					<Button primary={true} big={true}>
						Join
					</Button>
				</InputWrapper>
			</Form>
		</>
	);
};

export default InputGlobal;
