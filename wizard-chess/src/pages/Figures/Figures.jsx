import React from "react";
import styled from "styled-components";

const Figures = () => {
    return (
        <FIGURES id="figures">
            <p>check the</p>
            <h1>figures</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae rhoncus erat. Etiam bibendum nulla sed arcu faucibus, non rhoncus tellus efficitur. Nulla ac felis id sem feugiat pretium. Fusce sem ligula, fringilla a felis quis, iaculis accumsan arcu. Nunc maximus ullamcorper risus nec interdum. In ligula libero, aliquam id nisi sed, finibus tincidunt turpis. Nam in elementum elit. Praesent sed velit in nulla suscipit tristique. Donec tempor, dui non scelerisque imperdiet, diam eros aliquet augue, semper volutpat odio lorem nec lectus. Nunc pharetra ex nec eros mollis egestas. Maecenas eu molestie turpis, eu commodo risus. Mauris fringilla sit amet ipsum non convallis. Nunc ac est eu metus aliquet suscipit. Donec lectus nulla, dignissim a cursus eget, finibus aliquam urna. Pellentesque mattis odio vitae convallis suscipit.</p>

            <div className={"figures__grid"}>

            </div>
        </FIGURES>
    )
}

const FIGURES = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff;

`

export default Figures;