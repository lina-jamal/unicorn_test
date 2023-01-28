import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Slider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Card,
  Categories,
  Container,
  Filters,
  LineCategory,
  PriceRange,
  Product,
  Products,
} from "./theme";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import axios from "axios";

function Filter() {
  const [value, setValue] = useState([5, 20]);
  const [listOfProducts, setListOfProducts] = useState([]);
  const [listOfCategories, setListOfCategories] = useState([]);
  const [staticList, setStaticList] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const onChangeSearch = (event) => {
    const filteredData = staticList.filter((obj) => obj.title.toLowerCase().includes(event.target.value.toLowerCase()));
    setListOfProducts(filteredData)
  }

  const getProducts = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products?limit=30`)
    setListOfProducts(data)
    setStaticList(data)
  }


  const getCategories = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/categories`)
    setListOfCategories(data)
  }


  const getProductsByCategory = async (category) => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}?limit=30`)
    setListOfProducts(data)
  }


  useEffect(() => {
    getProducts()
    getCategories()
  }, [])


  const FeaturedProduct = [
    {
      id: "0",
      title: "Tropical Playsuit",
      price: 100,
      cover:
        "https://m.media-amazon.com/images/I/81GWKFRW5EL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: "1",
      title: "Tropical Playsuit",
      price: 400,
      cover:
        "https://m.media-amazon.com/images/I/51xkasaNuEL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: "2",
      title: "Tropical Playsuit",
      price: 250,
      cover:
        "https://images-na.ssl-images-amazon.com/images/I/81dmPaYpNnL._AC_UL450_SR450,320_.jpg",
    },
    {
      id: "3",
      title: "Tropical Playsuit",
      price: 300,
      cover:
        "https://images-na.ssl-images-amazon.com/images/I/715CLGC8OML._AC_UL450_SR450,320_.jpg",
    },
    {
      id: "4",
      title: "Tropical Playsuit",
      price: 100,
      cover:
        "https://images-na.ssl-images-amazon.com/images/I/51u-g43TqIL._AC_UL450_SR450,320_.jpg",
    },
    {
      id: "5",
      title: "Tropical Playsuit",
      price: 150,
      cover:
        "https://images-na.ssl-images-amazon.com/images/I/81gxZOUPXDS._AC_UL450_SR450,320_.jpg",
    },
    {
      id: "6",
      title: "Tropical Playsuit",
      price: 80,
      cover:
        "https://images-na.ssl-images-amazon.com/images/I/71A+pEMKrwL._AC_UL450_SR450,320_.jpg",
    },
  ];

  return (
    <Container>
      <Filters>
        {/* search */}
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Search products
          </InputLabel>
          <OutlinedInput
            onChange={onChangeSearch}
            id="outlined-adornment-password"
            type="search"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        {/* price */}
        <PriceRange>
          <div>
            <span>Price</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3V9.469L9 14.469V21.618L15 18.618V14.469L21 9.469V3H3ZM19 5V7H5V5H19ZM13 13.531V17.382L11 18.382V13.531L5.562 9H18.438L13 13.531Z"
                fill="#11142D"
              />
            </svg>
          </div>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            max={100}
            color="grey"
          />
          <div>
            <span>Range</span>
            <span>$5-$20</span>
          </div>
        </PriceRange>

        <Categories>
          <div className="title">
            <span>Product Categories</span>
          </div>
          {listOfCategories.map((item, i) => {
            return (
              <LineCategory key={i}>
                <div
                  onClick={() => getProductsByCategory(item)}
                  className="category_title"
                >
                  <span>{item}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.86182 3.13798L9.72382 7.99998L4.86182 12.862L5.80448 13.8046L11.6091 7.99998L5.80448 2.19531L4.86182 3.13798Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </LineCategory>
            );
          })}
        </Categories>

        <Categories>
          <div className="title">
            <span>Featured Product</span>
          </div>
          {FeaturedProduct.map(({ id, title, price, cover }) => {
            return (
              <Card key={id}>
                <Link to="">
                  <div className="cover">
                    <img src={cover} alt={title} />
                  </div>
                  <div className="details">
                    <div>{title}</div>
                    <div className="price">$ {price}</div>
                  </div>
                </Link>
              </Card>
            );
          })}
        </Categories>
      </Filters>
      <Products>
        {listOfProducts.map(({ id, image, price, description, rating, title }) => {
          return (
            <Product key={id}>
              <Link to="">
                <img src={image} alt={title} />
                <div className="details">
                  <div className="is_Favorite">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99982 13.3809L1.34316 7.72428C0.592947 6.97416 0.171449 5.95674 0.171387 4.89585C0.171324 3.83495 0.592702 2.81749 1.34282 2.06728C2.09294 1.31707 3.11036 0.89557 4.17125 0.895508C5.23215 0.895445 6.24961 1.31682 6.99982 2.06694C7.75039 1.31767 8.76761 0.896844 9.82816 0.896844C10.8887 0.896844 11.9059 1.31767 12.6565 2.06694V2.06694C13.4054 2.81769 13.826 3.83484 13.826 4.89528C13.826 5.95572 13.4054 6.97287 12.6565 7.72361L6.99982 13.3809ZM4.17116 2.22894C3.64369 2.22892 3.12806 2.38534 2.68949 2.67839C2.25092 2.97145 1.90911 3.38799 1.7073 3.87533C1.50548 4.36266 1.45273 4.8989 1.55571 5.41623C1.65868 5.93355 1.91277 6.40871 2.28582 6.78161L6.99982 11.4956L11.7138 6.78161C11.9846 6.51688 12.1959 6.19753 12.3336 5.84479C12.4713 5.49206 12.5323 5.11403 12.5126 4.73588C12.4929 4.35772 12.3928 3.98811 12.2191 3.65163C12.0454 3.31515 11.802 3.01952 11.5052 2.78442C11.2083 2.54932 10.8648 2.38013 10.4975 2.28813C10.1302 2.19612 9.74748 2.18339 9.37486 2.2508C9.00224 2.31821 8.64824 2.4642 8.33644 2.67907C8.02463 2.89394 7.76216 3.17275 7.56649 3.49694L6.99982 4.41161L6.43316 3.49694C6.19923 3.10697 5.86743 2.78491 5.47065 2.56272C5.07386 2.34054 4.62589 2.22593 4.17116 2.23028V2.22894Z"
                        fill="#F3692E"
                      />
                    </svg>
                  </div>
                  <div className="title_product">{title}</div>
                  <Rating name="simple-controlled" value={rating.rate} />
                  <div className="description">{description}</div>
                  <div className="price_product">${price}</div>
                </div>
              </Link>
            </Product>
          );
        })}
      </Products>
    </Container>
  );
}

export default Filter;
