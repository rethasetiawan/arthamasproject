import React from 'react';
import {
    Background,
    MainContainer,
    LabelContainer,
    InputWidth,
    BtnContainer,
    FormContainer
  } from './LoginScreenStyle';
  import { useNavigate } from 'react-router-dom';

const LoginScreen = (props) =>{
  let navigate = useNavigate();

  const handleChangeUsername= (event) => {
    localStorage.setItem("loginUsername", event.target.value)
  };

  const handleChangePassword= (event) => {
    localStorage.setItem("loginPassword", event.target.value)
  };
    return(
        <Background>
          <MainContainer>
            
            <FormContainer>
              <div style={{display:'flex',justifyContent:'center', paddingBottom:30}}>
              <div style={{width:100, height:50, border:'2px solid #3F72AF',textAlign:'center'}}>
                Logo
              </div>
              </div>
      
              <div>
                <LabelContainer>
                  <div>Username</div>
                  <InputWidth><input onChange={(event) => handleChangeUsername(event)} style={{border:'1px solid lightgray', padding:5, width:'100%'}}/></InputWidth>
                </LabelContainer>

                <LabelContainer>
                  <div>Password</div>
                  <InputWidth><input onChange={(event) => handleChangePassword(event)} style={{border:'1px solid lightgray', padding:5, width:'100%'}}/></InputWidth>
                </LabelContainer>

               <BtnContainer onClick={()=> navigate("/main")}> Login </BtnContainer>
              </div>
            </FormContainer>

           </MainContainer>
        </Background>
      
        // <Background>
        //     <MainContainer>
        //         <div>Username</div>
        //         <div>Username</div>
        //         login screenasd
        //     </MainContainer>
        // </Background>
    )
}

export default (LoginScreen);

//#DBE2EF
//#F9F7F7