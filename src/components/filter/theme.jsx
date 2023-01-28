import styled from "styled-components";

const Container = styled.section`
  display: flex;
  margin-top: 60px;
`;

const Filters = styled.div`
  width: 300px;
  padding: 10px;
`;

const PriceRange = styled.div`
  padding: 10px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
  }
`;

const Categories = styled.div`
  padding: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  .title {
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

const LineCategory = styled.button`
  margin-top: 5px;
  background-color: transparent;
  .category_title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 3px;
    padding: 5px;
    &:hover {
      background-color: #f4fcff;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.103);
    }
  }

`;

const Card = styled.div`
  height: 80px;
  margin-top: 12px;
  border-radius: 10px;
  a {
    display: flex;
    align-items: center;

    &:hover {
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.103);
    }
    .details {
      margin-left: 10px;
      .price {
        color: var(--secondary);
      }
    }
    .cover img {
      width: 80px;
      height: 80px;
      border-radius: 7px;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.103);
    }
  }
`;

const Products = styled.div`
  width: calc(100% - 300px);
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: space-evenly;
  gap: 50px;
`;

const Product = styled.div`
  height: 370px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 25px rgba(0, 0, 0, 0.103);

  a {
    position: relative;
    display: flex;
    width: 100%;
    height: 370px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .details {
      position: absolute;
      background: linear-gradient(to bottom, #0000, #00000065, #000000dd);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      padding: 30px;
      line-height: 30px;
      color: #fff;

      svg {
        color: var(--secondary) !important;
      }

      .title_product {
        font-size: 1.2rem;
        display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
      }
      .description {
        color: #ffffff;
        font-size: .9rem;
        display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;

      }
      .price_product {
        color: var(--secondary);
      }

      .is_Favorite {
        position: absolute;
        top: 5px;
        right: 5px;
        border-radius: 12px;
        padding: 5px 10px;
        background-color: #ffddd3;
      }
    }
  }
`;

export {
  Container,
  Filters,
  PriceRange,
  Categories,
  Card,
  LineCategory,
  Products,
  Product,
};
