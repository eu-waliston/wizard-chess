import React from "react";
import styled from "styled-components";

const HomeComponent = () => {
    return (
        <HC>
            <h1>Wizard Chess.</h1>
            <a href="https://www.chessvariants.com/large.dir/contest84/wizardchess.html#:~:text=The%20Wizard%20moves%20and%20captures,Wizard%20is%20not%20in%20check." rel="noreferrer" target="_blank">Rules</a>
        </HC>
    )
}

const HC = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 30%;
    h1 {
        font-size: 7rem;
        color: #ffffff;
        padding: 20px;
        text-shadow: 4px 4px 45px rgba(0,0,0, 0.45);
    }

    a {
        font-size: 1.5rem;
        text-transform: uppercase;
        text-decoration: none;
        color: #fff;
        background-color: red;
        padding: 15px;
        width: 180px;
        text-align: center;
        border-radius: 5px;
        box-shadow: 4px 4px 45px rgba(0,0,0, 0.45);
    }
    
`
export default HomeComponent;