import styled from "styled-components";
import { TextInput } from "../comonent/Input";

const DataForm = styled.div`
display: flex;
flex-direction: column;
// border: 1px solid black;
`;

const StyleTitle = styled.h2`
font-size: 20px;
font-family: '-apple-system', HelveticaNeue, Roboto, 'Noto Sans KR', helvetica, Gulim,sans-serif;
`;

/**
 * 
 * @param {data}
 * @returns Login Data Input Component Return
 */
const LoginInput = ({data}) => {
  const inputType = data.type === "비밀번호" ? 'password' : data.type === "이메일" ? 'email' : 'text' 
  return(
    // <DataForm>
      <TextInput data={{
        placeholder: `${data.type} 입력`,
        type: data.type,
        inputType,
        style: { fontSize: 15, width: 200 }
      }}/>
    // </DataForm>
  );
};

/* Page components for logging in to this site */
const LoginScreen = () => {
  return(
    <DataForm style={{justifyContent: "center", alignItems: "center", height: window.innerHeight, backgroundColor: "#f1f1f1"}}>
      <DataForm style={{ backgroundColor: "white", padding: 50, height: window.innerHeight, justifyContent: "center" }}>
        <StyleTitle style={{textAlign: 'center'}}>로그인</StyleTitle>
        <LoginInput data={{ type: "아이디" }}/>  
        <LoginInput data={{ type: "비밀번호"}}/>
      </DataForm> 
    </DataForm>
  );
};

export default LoginScreen;