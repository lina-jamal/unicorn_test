import React from "react";
import { ReactComponent as BGHeader } from "../../assets/icons/bg_shop_Header.svg";
import { Container, Content, Description, Title } from "./theme";

function Header() {
  return (
    <Container>
      <BGHeader />
      <Content>
        <Title>Home Shopping, Your Choice!</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </Description>
      </Content>
    </Container>
  );
}

export default Header;
