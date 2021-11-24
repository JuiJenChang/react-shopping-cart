import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";
import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';
import { bannerList } from "../utils/bannerList";

const Home = () => {
  let history = useHistory();

  const linkToProductDetail = (item) => {
    history.push({
      pathname: '/pages/productDetail',
      search: `?id=${item.id}`,
      state: { detail: item }
    })
  }

  return (
    <Container>
      <Carousel controls={false}>
        {bannerList.map((item, i) => (
          <Carousel.Item interval={5000} key={i}>
            <BannerContent
              src={item.banner}
              alt=""
              onClick={(e) => {
                e.preventDefault();
                linkToProductDetail(item)
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100%;
  .carousel {
    height: 100%;
  }
  .carousel-inner {
    height: 100%;
  }
`
const BannerContent = styled.img`
  cursor: pointer;
  width: 100%;
  height: calc(100vh - 80px);
`