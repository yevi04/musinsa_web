import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.a`
  justify-content: center;
  display: flex;
  align-items: center;
  &:hover{
    cursor: pointer;
  }
`;

const StyleButtonOnClick = (text) => {
  if (text === '맨위로') {
    window.scrollTo(0, 0)
  };
};

const Button = ({ text, style }) => {
  if (typeof text === 'string') {
    return (
      <StyleButton id={text} onClick={() => StyleButtonOnClick(text)} style={style}>{text}</StyleButton>
    )
  };
};

export { Button };