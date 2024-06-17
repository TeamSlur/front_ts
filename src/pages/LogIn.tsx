import React, { useState } from "react";
import TextField from "../component/TextField";
import Button from "../component/button/Btn";
import './LogIn.scss';
import { useNavigate } from 'react-router-dom';
import { ApiData } from "../types/apiTypes";
import { login } from "../apis/login";

const LogIn: React.FC = () => {
    const [userId, setUserId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
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

    const handleLogInClick = async () => {
        const loginData: ApiData = {
            userId,
            password,
        };

        const response = await login('login', loginData);
        if (response) {
            navigate('/main/:pageContent');
        } else {
            alert('로그인에 실패했습니다. 다시 시도해주세요.');
        }
    };

    const separator = " | ";

    return (
        <div className={'loginContainer'}>
            <img src={`${process.env.PUBLIC_URL}/assets/imgs/logo.png`} alt="Logo" className={'LoginLogo'} />
            <TextField
                type={'ID'}
                value={userId}
                onChange={setUserId}
            />
            <TextField
                type={'password'}
                value={password}
                onChange={setPassword}
            />
            <Button
                buttonSize="signUpLogInButton"
                buttonColor="blue"
                onClick={handleLogInClick}
            >
                로그인
            </Button>
            <div className={'accountAction'}>
                <span id={'id'} onClick={handleIdClick}>아이디찾기</span>
                <span>{separator}</span>
                <span id={'pw'} onClick={handlePwClick}>비밀번호찾기</span>
                <span>{separator}</span>
                <span id={'signup'} onClick={handleSignUpClick}>회원가입</span>
            </div>
        </div>
    );
};

export default LogIn;
