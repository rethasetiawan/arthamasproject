import React, {useState} from 'react';
import UserScreen from './UserScreen';
import PersonalScreen from './PersonalScreen';
import LoanScreen from './LoanScreen';
import ReportScreen from './ReportScreen';
import { useNavigate } from 'react-router-dom';

const MainScreen = (props) =>{
    let navigate = useNavigate();
    const [personalSelected, setPersonalSelected] = useState(false);
    const [userSelected, setUserSelected] = useState(false);
    const [loanSelected, setLoanSelected] = useState(false);
    const [reportSelected, setReportSelected] = useState(false);

    const username = localStorage.getItem("loginUsername");

    const isPersonalSelected = () => {
        setPersonalSelected(true);
        setUserSelected(false);
        setLoanSelected(false);
        setReportSelected(false);
        navigate("/main")
    }

    const isUserSelected = () => {
        setPersonalSelected(false);
        setUserSelected(true);
        setLoanSelected(false);
        setReportSelected(false);
    }

    const isLoanSelected = () => {
        setPersonalSelected(false);
        setUserSelected(false);
        setLoanSelected(true);
        setReportSelected(false);
    }

    const isReportSelected = () => {
        setPersonalSelected(false);
        setUserSelected(false);
        setLoanSelected(false);
        setReportSelected(true);
    }

    const Tabs = () =>{
        return(
        <div style={{background:'#3F72AF', height:'100vh', width:300}} >
            <div style={{paddingTop:'20%',display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
                <div>
                    <div
                    onClick={()=> isPersonalSelected()}
                    style={{...styles.tabContainer,background: personalSelected ? 'white' : 'transparent', color: personalSelected ? 'black' : 'white'}}>
                        Personal
                    </div>

                    <div
                    onClick={()=> isUserSelected()}
                    style={{...styles.tabContainer,background: userSelected ? 'white' : 'transparent', color: userSelected ? 'black' : 'white'}}>
                        User
                    </div>

                    <div
                    onClick={()=> isLoanSelected()}
                    style={{...styles.tabContainer,background: loanSelected ? 'white' : 'transparent', color: loanSelected ? 'black' : 'white'}}>
                        Loan
                    </div>
                    
                    <div
                    onClick={()=> isReportSelected()}
                    style={{...styles.tabContainer,background: reportSelected ? 'white' : 'transparent', color: reportSelected ? 'black' : 'white'}}>
                        Report
                    </div>

                </div>
               
                <div style={{color:'white', fontWeight:'bold', justifyContent:'center', display:'flex', marginTop:50}}>
                Welcome, {username}
                </div>
            </div>
          
        </div>
        )
    }

    return(
        <div style={{display:'flex'}}>
            <Tabs/>
            {personalSelected && <PersonalScreen/>}
            {userSelected && <UserScreen/>}
            {loanSelected && <LoanScreen/>}
            {reportSelected && <ReportScreen/>}
        </div>
    )
}

const styles = {
    tabContainer:{
        border:0, 
        padding:'20px 50px 20px 50px',
    }
}
export default (MainScreen);