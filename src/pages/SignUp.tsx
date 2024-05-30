import React from "react"
import './SignUp.scss'
import TextField from "../component/TextField";
import ErrorMessage from "../component/ErrorMessage";
import Button from "../component/Btn";
import {useNavigate} from "react-router-dom";

const SignUp=()=>{
    const navigate = useNavigate();
    const handleIdClick = () => {
        navigate('/');
    };
    return (
        <div className={'signupContainer'}>
            <img id={`Logo_signup`} src={`${process.env.PUBLIC_URL}/assets/imgs/logo.png`} alt="Logo"/>
            <span id={'title_signup'}>회원가입</span>

            <span id={'title'}>아이디</span>
            <TextField type={'ID'}/>
            <ErrorMessage mode={'ID'} type={'compare'}/>

            <span id={'title'}>비밀번호</span>
            <TextField type={'password'}/>
            <ErrorMessage mode={'password'} type={'search'}/>

            <span id={'title'}>비밀번호 확인</span>
            <TextField type={'password'}/>
            <ErrorMessage mode={'password'} type={'compare'}/>

            <span id={'title'}>이름</span>
            <TextField type={'text'}/>
            <ErrorMessage mode={'text'} type={'search'}/>

            <span id={'title'}>이메일</span>
            <TextField type={'email'}/>
            <ErrorMessage mode={'email'} type={'search'}/>

            <Button
                buttonSize="signUpLogInButton"
                buttonColor="blue">가입하기</Button>
            <span id={'backToLogIn'} onClick={handleIdClick}>취소</span>
        </div>
    )
}
export default SignUp