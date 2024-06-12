import React from "react"
import Button from "../component/button/Btn";
import './SearchId.scss'
import TextField from "../component/TextField";
import {useNavigate} from "react-router-dom";
import ErrorMessage from "../component/ErrorMessage";

const SearchId=()=>{
    const navigate = useNavigate();
    const handleIdClick = () => {
        navigate('/');
    };
    return(
        <div className={'searchCotainer'}>
            <img id={'Logo'} src={`${process.env.PUBLIC_URL}/assets/imgs/logo.png`} alt="Logo"/>
            <div className="buttonContainer">
                <Button
                    buttonSize="searchButton"
                    buttonColor="blue">아이디 찾기
                </Button>
                <Button
                    buttonSize="searchButton"
                    buttonColor="blue">비밀번호 찾기
                </Button>
            </div>
            <span id={'title'}>이메일 입력</span>
            <TextField type={'email'}/>
            <ErrorMessage mode={'email'} type={'search'}/>
            <Button
                buttonSize="checkDuplicationButton"
                buttonColor="blue">확인
            </Button>
            <span id={'backToLogIn'} onClick={handleIdClick}>로그인 페이지로 돌아가기</span>
        </div>
    )
}
export default SearchId