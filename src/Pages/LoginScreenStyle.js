import styled from 'styled-components';
import { DEVICE } from '../Config';

export const Background = styled.div`
  // display:flex;
  width: 100vw;
  height: 100vh;
  background: #DBE2EF;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MainContainer = styled.div`
 display:flex;
 justify-content:center;
 padding-top:15%;
`;

export const FormContainer = styled.div`
  background:#F9F7F7;
  width:30%;
  padding:20px;
  border-radius: 20px;
`;

export const LabelContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  padding-bottom:10px;
  align-items:center;
`;

export const InputWidth = styled.div`
  width:80%;
`;


export const BtnContainer = styled.button`
  border:0px;
  background: #3F72AF;
  width: 100%;
  border-radius: 5px;
  height:40px;
  color:white;
  font-weight:700
`;
