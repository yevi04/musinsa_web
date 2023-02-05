import React from "react";
import styled from "styled-components";

const StyleInput = styled.input`
    height: 50px;
    padding-left: 15px;
    outline: none;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin: 10px 0;
    
    &:focus{
        border: 1px solid #000;
    }
`

const TextInput = ({ data }) => {
    return <StyleInput type={data.inputType} style={data.style} placeholder={data.placeholder} autoFocus={data.type === "아이디" ? true : false} autoComplete={true} />
}

export { TextInput };