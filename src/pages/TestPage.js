import Button from "../component/Btn.tsx";
import TextField from "../component/TextField.tsx";
import IssueType from "../component/IssueType";
import Priority from "../component/Priority";
import PlanItems from "../component/PlanItems";

const TestPage = () => {
    return (
        <div className="App">
                <p>
                        Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                        Learn React
                </a>

                <p>댓글 저장 버튼</p>
                <Button
                    buttonSize="commentButton"
                    buttonColor="blue">저장</Button>

                <p>아이디 중복 확인 버튼</p>
                <Button
                    buttonSize="checkDuplicationButton"
                    buttonColor="blue">중복확인</Button>

                <p>가입, 로그인 버튼</p>
                <Button
                    buttonSize="signUpLogInButton"
                    buttonColor="blue">가입하기</Button>....
                <Button
                    buttonSize="signUpLogInButton"
                    buttonColor="blue">로그인</Button>

                <p>아이디, 비번 찾기 버튼</p>
                <Button
                    buttonSize="searchButton"
                    buttonColor="blue">아이디 찾기</Button>....
                <Button
                    buttonSize="searchButton"
                    buttonColor="blue">비밀번호 찾기</Button>

                <p>새 프로젝트, 프로젝트 참여</p>
                <Button
                    buttonSize="initialProjectButton"
                    buttonColor="blue">새 프로젝트</Button>....
                <Button
                    buttonSize="initialProjectButton"
                    buttonColor="blue">프로젝트 참여</Button>

                <p>초대코드 입력 버튼</p>
                <Button
                    buttonSize="invitationCodeButton"
                    buttonColor="grey">입력</Button>

                {/*<TextField placeHolder="Enter text here" type="text"/>*/}
                {/*<TextField placeHolder="Enter your email" type="email"/>*/}

                {/*<Input mode={"email"} />*/}
                {/*<Input mode={"text"} />*/}
                {/*<Input mode={"password"} />*/}

                {/*<SelectBox mode={'email'} data={['gmail.com','naver.com','daum.com']} />*/}
                <TextField type={"text"}/>
                <TextField type={"password"}/>
                <TextField type={"email"}/>

                <IssueType type={"bug"}/>
                <IssueType type={"improvement"}/>
                <IssueType type={"new"}/>
                <IssueType type={"issue"}/>
                <p></p>
                <Priority type={1}/>
                <Priority type={2}/>
                <Priority type={3}/>
                <p></p>

                <p></p>
                <PlanItems type={"timeline"} />
                <PlanItems type={"board"} />
                <PlanItems type={"issue"} />
                <PlanItems type={"code"} />

        </div>
    );
}

export default TestPage;

