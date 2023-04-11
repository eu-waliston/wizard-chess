import React from "react";
import styled from "styled-components";

const FigureComponent = () => {
    return (
        <FC>
            <div className="fig__top">
                <img src={require("../img/collection.jpg")} alt="collection" className="collection" />
            </div>

            <div className="fig__center">

                <div className="img__grid">
                    <img src={require("../img/peace-1-removebg-preview.png")} alt="figure" className="img" />
                </div>

                <div className="img__grid">
                    <img src={require("../img/peace-2-removebg-preview.png")} alt="figure" className="img" />
                </div>

                <div className="img__grid">
                    <img src={require("../img/peace-3-removebg-preview.png")} alt="figure" className="img" />
                </div>

                <div className="img__grid">
                    <img src={require("../img/peace-4-removebg-preview.png")} alt="figure" className="img" />
                </div>

                <div className="img__grid">
                    <img src={require("../img/peace-5-removebg-preview.png")} alt="figure" className="img" />
                </div>

                <div className="img__grid">
                    <img src={require("../img/peace-6-removebg-preview.png")} alt="figure" className="img" />
                </div>

            </div>
        </FC>
    )
}

const FC = styled.div`
    
`

export default FigureComponent;