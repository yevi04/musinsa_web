import React from "react";
import styled from "styled-components";

const StyleHeader = styled.div`
  background-color: black;
  text-align: center;
  padding: 5px 0;
  font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
`;

const Title = styled.h1`
  font-size: inherit;
  margin: 0;
  padding: 0;
`;

const TitleText = styled.a`
  display: inline-block;
  width: 200px;
  height: 50px;
  background-image: url(https://store.musinsa.com/skin/musinsa/images/logo_nsl_20211229.png?20200204);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50% auto;
  text-indent: -9999px;
`;
export const Header = () => {
  return (
    <StyleHeader className="test">
      <Title>
        <TitleText href="">22 F/W SEASON OFF</TitleText>
      </Title>
    </StyleHeader>
  );
};
