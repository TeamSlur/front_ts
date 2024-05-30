import React from "react"
import {useNavigate} from "react-router-dom";
import Button from "../component/Btn";
import TextField from "../component/TextField";
import ErrorMessage from "../component/ErrorMessage";
import './SearchPw.scss'

const SearchPw=()=>{
    const navigate = useNavigate();
    const handleIdClick = () => {
        navigate('/');
    };
    return(
        <div className={'searchCotainer'}>
            <img id={'Logo_searchPw'} src={`${process.env.PUBLIC_URL}/assets/imgs/logo.png`} alt="Logo"/>
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

            <span id={'title'}>아이디</span>
            <TextField type={'ID'}/>
            <ErrorMessage mode={'ID'} type={'search'}/>

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
export default SearchPw