import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 140px;
`;

const Head = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background-color: var(--white);
`;

const HeadLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    font-size: 0.9rem;

    &:first-child {
      margin-right: 50px;
    }

    svg {
      margin-right: 10px;
    }
  }
`;

const Title = styled.h1`
  color: var(--secondary);
`;

const Menu = styled.div`
  background-color: var(--primary);
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;

const Ul = styled.ul`
  a {
    margin-left: 10px;
    padding: 5px 15px;

    &:hover {
      color: var(--secondary);
    }
  }
`;

const Search = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: var(--white);
  position: relative;
  border-radius: 6px;

  input {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    padding-left: 15px;
  }

  svg {
    position: absolute;
    right: 20px;
  }
`;

const MenuOption = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;

  button {
    .count {
      position: absolute;
      font-size: 0.8rem;
      color: var(--white);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      top: -4px;
      right: -4px;
      background-color: var(--secondary);
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export { Nav, Head, Menu, Title, HeadLinks, Ul, Search, MenuOption };
