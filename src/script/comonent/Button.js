import React from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const StyleButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: gray;
  background: white;
`;
export const Button = ({text}) =>{
  return <StyleButton onClick={() => Swal.fire({
    icon: "success",
    title: "로그인 성공",
    text: "서비스를 바로 이용하시겠습니까?",
    showCancelButton: true,
    confirmButtonText: "네",
    cancelButtonText: "아니요"
  }).then(res => {
    console.log(res)
  })}>{text}</StyleButton>
}