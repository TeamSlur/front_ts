import React from "react";

interface Props {
    mode: keyof StyleObj
    type: 'search' | 'compare'
}

interface StyleObj{
    ID: string;
    text: string;
    email: string;
    password: string;
    [key: string]: string;
}
const ErrorMessage = ({mode, type}: Props) => {
    const styleObj: StyleObj = {
        'ID' : '존재하지 않는 아이디입니다.',
        'text' : 'null',
        'email' : '해당 이메일의 아이디가 존재하지 않습니다.',
        'password' : '20자 이내의 비밀번호를 입력해주세요.'
    }
    if (type === 'compare') {
        styleObj.email = '아이디와 이메일 정보가 일치하지 않습니다.';
        styleObj.password = '비밀번호가 일치하지 않습니다.';
        styleObj.ID = '사용할 수 없는 아이디입니다.'
    }

    return(
        <p id={`${mode}${type}`}>{styleObj[mode]}</p>
    )
}
export default ErrorMessage;