import styled from "styled-components";

const Container = styled.header`
  background-color: var(--white);
  width: 80%;
  height: 400px;
  margin: 50px auto;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

const Title = styled.div`
  font-size: 2rem;
`;

const Description = styled.div`
  width: 60%;
  font-size: 1rem;
  color: #9a9ab0;
`;

const BoxEmail = styled.span`
  width: 50%;
  height: 60px;
  background-color: #9a9ab0;
  position: relative;
  display: flex;
  border-radius: 7px;
  overflow: hidden;
  align-items: center;

  input {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    padding-left: 15px;
    background-color: #9a9ab0;
    &::placeholder {
      color: #fff;
    }
  }

  .go {
    position: absolute;
    background-color: var(--secondary);
    height: 40px;
    width: 40px;
    right: 10px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export { Container, Description, BoxEmail, Title };
