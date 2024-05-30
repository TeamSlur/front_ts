import React, {useEffect} from "react";
import TextField from "../component/TextField";
import Button from "../component/Btn";
import './LogIn.scss'
import { useNavigate } from 'react-router-dom';


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
    const separator = " | ";

    return (
        <div className={'loginContainer'}>
            <img id={`Logo_login`} src={`${process.env.PUBLIC_URL}/assets/imgs/logo.png`} alt="Logo"/>
            <TextField type={'ID'}/>
            <TextField type={'password'}/>
            <Button
                buttonSize="signUpLogInButton"
                buttonColor="blue">로그인
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