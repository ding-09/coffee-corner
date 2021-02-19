import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import heroImg from '../assets/hero.jpg';

const Home = () => {
  return (
    <StyledHome>
      <section className="hero">
        <section className="hero-text">
          <p>BRINGING ENERGY TO YOUR MORNINGS</p>
          <h2 className="big-title">Wake Up To <br></br>Something Special</h2>
          <Link to="/products" className="btn">
            SHOP NOW
          </Link>
        </section>
      </section>
    </StyledHome>
  );
};

const StyledHome = styled.main`
  width: 100%;
  height: 90vh;
  .hero {
    background: url(${heroImg}) no-repeat;
    background-size: cover;
    background-position: left;
    width: 100%;
    height: 100%;
    position: relative;
    .hero-text {
      width: 60%;
      position: absolute;
      top: 15rem;
      left: 8rem;
      p {
        opacity: 0.8;
        font-weight: 500;
      }
      h2 {
          margin-top: 3rem;
          margin-bottom: 6rem;
          opacity: 0.9;
      }
    }
  }
`;

export default Home;
