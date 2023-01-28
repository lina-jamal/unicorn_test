import styled from "styled-components";

const Container = styled.header`
  background-color: var(--white);
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-image: url("https://images.ctfassets.net/rxqefefl3t5b/6I2vL9f0IVsDQ8qFgdrxH7/7660c4bab3116a4a04025d5c4802efa5/Virgin-Red-online-shopping-offers.jpg?fl=progressive&q=80");
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Content = styled.div`
  position: absolute;
  right: 10%;
  width: 50%;
  max-width: 500px;
  color: var(--text-color);
`;

const Title = styled.div`
  font-size: 4rem;
  margin-bottom: 30px;
`;

const Description = styled.span`
  font-size: 1rem;
`;

export { Container, Content, Title, Description };
