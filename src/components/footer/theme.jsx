import styled from "styled-components";

const Container = styled.footer`
  background-color: var(--white);
  padding: 50px 60px;
  display: flex;
`;

const Cover = styled.div`
  img {
    width: 400px;
    height: 400px;
  }
`;
const Content = styled.div`
  width: 70%;
  display: flex;
  padding-left: 30px;
  padding-bottom: 30px;
  flex-direction: column;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Sizes = styled.div`
  display: flex;
  div {
    margin-left: 5px;
    width: 30px;
    color: var(--white);
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--secondary);
  }
`;

const CopyRight = styled.div`
  margin-top: auto;
`;

const Line = styled.div`
  margin-top: 30px;
`;

const Title = styled.h1`
  color: var(--secondary);
  font-size: 3rem;
`;

export { Head, Container, Line, Cover, Content, Sizes, Title, CopyRight };
