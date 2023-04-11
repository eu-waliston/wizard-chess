import React from "react";
import styled from "styled-components";
import background from "../../components/img/bkg-2.jpg"
import HomeComponent from "../../components/Home/Home.Component";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
    return (
        <HOME style={{ backgroundImage: `url(${background})` }} id="home">
            <Navbar />
            < HomeComponent />
        </HOME>
    )
}

const HOME = styled.div`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export default Home;