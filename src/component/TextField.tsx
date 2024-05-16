import "./TextField.scss";

interface Props {
    placeHolder: String
    type: String
}

const TextField = ({placeHolder, type}: Props)  => {
    if(type == "text"){
        return (
            <div className="input-container">
                <input type="text" className="input-line" placeholder={`${placeHolder}`}/>
            </div>
        );
    }
    else {
        return (
            <div className="input-container">
                <div className="input-email-container">
                    <input type="email" className="input-email" placeholder="Enter email"/>
                    <div className="at-symbol">@</div>
                    <select className="email-domain">
                        <option value="@gmail.com">gmail.com</option>
                        <option value="@naver.com">naver.com</option>
                        <option value="@daum.net">daum.net</option>
                    </select>
                </div>
            </div>
        );
    }

};


export default TextField;