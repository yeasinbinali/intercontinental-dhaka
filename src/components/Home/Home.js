import React from "react";
import "./Home.css";
import carouse1 from "../../images/carousel/carousel1.jpeg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Container className="header">
        <div className="header-description">
          <h3>DHAKA'S MOST PRESTIGIOUS LUXURY BUSINESS AND CONVENTION HOTEL</h3>
          <p>
            Located in the prestigious downtown business district,
            <b> InterContinental Dhaka</b> is the foremost name of luxury. The
            hotel is beautifully designed boasted with Millennium modern outlook
            with a touch of local culture. Featuring 226 luxury rooms and
            suites, a selection of restaurants offering exquisite cuisines. Host
            your events at the meeting spaces equipped with modern facilities.
            Our outdoor temperature-controlled swimming pool and Health Club is
            a perfect destination for business or leisure.
          </p>
          <Link to='/books'>Book Now</Link>
        </div>
        <div>
          <img src={carouse1} alt=""></img>
        </div>
      </Container>
    </div>
  );
};

export default Home;
