import Styled from 'styled-components';

export const Label = Styled.label`
font-size: 14px;
font-weight: 500;
color: #94a3b8;
`;

export const Input = Styled.input`
border: 1px solid rgba(112, 20, 247, 0.2);
outline:none;
border-radius: 5px;
padding: 10px 10px;
`;

export const LoginCon = Styled.div`
background-color: #f9f9f9;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

export const LoginSubCon = Styled.div`
width: 90%;
background-color: white;
border-radius: 8px;
box-shadow: rgba(112, 20, 247, 0.2) 0px 10px 15px -3px,
rgba(112, 20, 247, 0.2) 0px 4px 6px -2px;
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
padding: 30px 5px;
max-width: 380px;
`;

export const Logo = Styled.img`
  width:162px
`;

export const Form = Styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
`;

export const InputCon = Styled.div`
display: flex;
flex-direction: column;
gap: 5px;
width: 90%;
`;

export const ShowPassCon = Styled.div`
width: 90%;
display: flex;
align-items: center;
`;

export const Button = Styled.button`
background-color:rgba(112, 20, 247, 1);
border: 0px;
color: #ffffff;
font-weight: 600;
border-radius: 5px;
width: 90%;
padding: 10px 0px;
cursor: pointer;
`;

export const Err = Styled.p`
color: #ff0b37;
margin: 0px;
`;
