import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Cover,
  Content,
  Head,
  Sizes,
  Title,
  CopyRight,
  Line,
} from "./theme";

function footer() {
  return (
    <Container>
      <Cover>
        <img
          src="https://m.media-amazon.com/images/I/613W+lmpWVL._AC_UL480_FMwebp_QL65_.jpg"
          alt=""
        />
      </Cover>

      <Content>
        <Head>
          <Title>Dealerz.</Title>
          <Sizes>
            <div>Yt</div>
            <div>Fb</div>
            <div>Tw</div>
            <div>Ig</div>
          </Sizes>
        </Head>
        <Line>
          <Link to="">Privacy Policy</Link>
        </Line>
        <Line>
          <Link to="">Terms and Condition</Link>
        </Line>
        <CopyRight>@2020 TanahAir Studio. All rights reserved.</CopyRight>
      </Content>
    </Container>
  );
}

export default footer;
