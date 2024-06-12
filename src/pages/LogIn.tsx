import TextField from "../component/TextField";
import Button from "../component/button/Btn";
import './LogIn.scss'
import { useNavigate } from 'react-router-dom';
import React from "react";


const LogIn = () => {
    const navigate = useNavigate();
    const handleIdClick = () => {
        navigate('/searchid');
    };
    const handlePwClick = () => {
        navigate('/searchpw');
    };
    const handleSignUpClick = () => {
        navigate('/signup');
    };
    const handleLogInClick = () => {
        navigate('/main/:pageContent');
    };
    const separator = " | ";

    return (
        <div className={'loginContainer'}>
            <img src={`${process.env.PUBLIC_URL}/assets/imgs/logo.png`} alt="Logo" className={'LoginLogo'}/>
            <TextField type={'ID'}/>
            <TextField type={'password'}/>
            <Button
                buttonSize="signUpLogInButton"
                buttonColor="blue"
                onClick={handleLogInClick}>로그인
            </Button>
            <div className={'accountAction'}>
                <span id={'id'} onClick={handleIdClick}>아이디찾기</span>
                <span>{separator}</span>
                <span id={'pw'} onClick={handlePwClick}>비밀번호찾기</span>
                <span>{separator}</span>
                <span id={'signup'} onClick={handleSignUpClick}>회원가입</span>
            </div>
        </div>
    )
}
export default LogIn;