import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding-top: 60px;
	flex-direction: column;
	align-items: center;
`;

export const Form = styled.form`
	width: 100%;
	max-width: 400px;
	margin-top: 20px;
	display: flex;

	input{
		padding: 0 20px;
		flex: 1;
		height: 40px;
		font-size: 18px;
		background: #fff;
		color: #444;
		border-radius: 3px;
		border: 0;
	}

	button{
		height: 40px;
		padding: 0 20px;
		background: #63f5b3;
		font-size: 20px;
		border-radius: 3px;
		margin-left: 15px;
		border: 0;
		cursor: pointer;

		&:hover{
			background: #52d89f;
		}
	}
`;
