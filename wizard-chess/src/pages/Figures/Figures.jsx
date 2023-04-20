import React from 'react'
import styled from 'styled-components'

const Figures = () => {
  // const [peace, setPeace] = React.useState(false)

  // const handleClick = () => {
  //   setPeace(!peace)
  // }
  return (
    <FIGURES id="figures">
      <div className='check'>
        <p className='cehck_p'>  check the  </p>
        <h1>figures.</h1>
      </div>
      <div>
        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae rhoncus erat. Etiam bibendum nulla sed arcu faucibus, non rhoncus tellus efficitur. Nulla ac felis id sem feugiat pretium. Fusce sem ligula, fringilla a felis quis, iaculis accumsan arcu. Nunc maximus ullamcorper risus nec interdum. In ligula libero, aliquam id nisi sed, finibus tincidunt turpis. Nam in elementum elit. Praesent sed velit in nulla suscipit tristique. Donec tempor, dui non scelerisque imperdiet, diam eros aliquet augue, semper volutpat odio lorem nec lectus. Nunc pharetra ex nec eros mollis egestas. Maecenas eu molestie turpis, eu commodo risus. Mauris fringilla sit amet ipsum non convallis. Nunc ac est eu metus aliquet suscipit. Donec lectus nulla, dignissim a cursus eget, finibus aliquam urna. Pellentesque mattis odio vitae convallis suscipit.
        </p>
      </div>

      <div className={'figures__grid'}>
        <img src={require('../../components/img/peace-2-removebg-preview.png')} alt="figures" />

        <img src={require('../../components/img/peace-1-removebg-preview.png')} alt="figures" />

        <img src={require('../../components/img/peace-3-removebg-preview.png')} alt="figures" />

        <img src={require('../../components/img/peace-4-removebg-preview.png')} alt="figures" />

        <img src={require('../../components/img/peace-5-removebg-preview.png')} alt="figures" />

        <img src={require('../../components/img/peace-6-removebg-preview.png')} alt="figures" />
      </div>

      <div className="info__img_grid">
        <div className="info_img">
          <div>
            <img src={require('../../components/img/peace-2-removebg-preview.png')} alt="figures" />
            <p>the</p>
            <h1>king</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus voluptatem enim autem reprehenderit quasi cumque quidem, quae eum similique consectetur, facilis nisi maiores earum beatae aut, aliquid ut perspiciatis.</p>
          </div>
        </div>

        <div className="info_img">
          <div>
            <img src={require('../../components/img/peace-1-removebg-preview.png')} alt="figures" />
            <p>the</p>
            <h1>queen</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus voluptatem enim autem reprehenderit quasi cumque quidem, quae eum similique consectetur, facilis nisi maiores earum beatae aut, aliquid ut perspiciatis.</p>
          </div>
        </div>

        <div className="info_img">
          <div>
            <img src={require('../../components/img/peace-3-removebg-preview.png')} alt="figures" />
            <p>the</p>
            <h1>bishop</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus voluptatem enim autem reprehenderit quasi cumque quidem, quae eum similique consectetur, facilis nisi maiores earum beatae aut, aliquid ut perspiciatis.</p>
          </div>
        </div>

        <div className="info_img">
          <div>
            <img src={require('../../components/img/peace-4-removebg-preview.png')} alt="figures" />
            <p>the</p>
            <h1>knight</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus voluptatem enim autem reprehenderit quasi cumque quidem, quae eum similique consectetur, facilis nisi maiores earum beatae aut, aliquid ut perspiciatis.</p>
          </div>
        </div>

        <div className="info_img">
          <div>
            <img src={require('../../components/img/peace-5-removebg-preview.png')} alt="figures" />
            <p>the</p>
            <h1>rook</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus voluptatem enim autem reprehenderit quasi cumque quidem, quae eum similique consectetur, facilis nisi maiores earum beatae aut, aliquid ut perspiciatis.</p>
          </div>
        </div>

        <div className="info_img">
          <div>
            <img src={require('../../components/img/peace-6-removebg-preview.png')} alt="figures" />
            <p>the</p>
            <h1>pawn</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus voluptatem enim autem reprehenderit quasi cumque quidem, quae eum similique consectetur, facilis nisi maiores earum beatae aut, aliquid ut perspiciatis.</p>
          </div>
        </div>
      </div>

    </FIGURES>
  )
}

const FIGURES = styled.div`
    width: 100%;
    height: 140vh;
    background-color: #fff;

    display: grid;
    align-items: center;
    text-align: center;

    .text {
      text-align: center;
      width: 80%;
      position: relative;
      margin-left: 10%;


      top: 38px;
    }

    .line {
      width: 150px;
      height: 2px;
      background-color: red;
    }

    .check {
      position: relative;
      top: 38%;

      h1 {
        font-size: 4rem;
        text-transform: uppercase;
        color: red;
      }

      .cehck_p {
          font-size: 1.5rem;
          text-transform: uppercase;
          color: red;

      }

      .cehck_p::after {
        content: "";
        position: absolute;
        height: 2px;
        background-color: red;
        width: 30%;
        margin-left: 15px;
        top: 12%;
      }

      .cehck_p::before {
        content: "";
        position: absolute;
        height: 2px;
        background-color: red;
        width: 30%;
        margin-left: -31%;
        top: 12%;

      }

    }

    .figures__grid {
      img {
        cursor: pointer;
      }
    }

    .info__img_grid {
      display: grid;
      grid-template-columns: repeat(6, 200px);
      align-items: center;
      text-align: center;
      align-content: center;
      justify-content: center;
      column-gap: 50px;

      .info_img {
        background-color: #000000dc;
        color: #fff;
        padding: 20px;
        height: 100%;
        border-radius: 5px;
        box-shadow: 5px 5px 45px rgba(0,0,0, 0.30);

        img {
          width: 90px;
        }
        
        h1 {
          font-size: 1.5rem;
          text-transform: uppercase;
          color: red;
        }

        p {
          font-size: .7rem;
        }

        &:hover {
          cursor: pointer;
          transition: .5s;
          transform: translateY(-350px);
        }
      }

    }
`

export default Figures
