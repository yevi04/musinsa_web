import styled from "styled-components";

const StyleInput = styled.input`
    width: 500px;
    height: 50px;
    background-color: white;
    padding-left: 15px;
    border: 2px solid gray;
    border-radius: 3px;
    outline: none;
`

export const TextInput = ({data}) => {
    return <StyleInput placeholder={data.placeholder}/>
}