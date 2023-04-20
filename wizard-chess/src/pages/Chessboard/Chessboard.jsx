import React from 'react'
import styled from 'styled-components'
import background from '../../components/img/table.webp'

const Chessboard = () => {
  return (
    <CHESSBOARD id='chessboard'>
      <div className='chess'>
        <div className='info'>
          <p>meet the</p>
          <h1>chessboard</h1>
        </div>
        <img src={(`${background}`)} alt="chessboard" className='chessboard' />
      </div>
    </CHESSBOARD>
  )
}

const CHESSBOARD = styled.div`
  width: 100%;
  height: 100vh;

  .chess {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-evenly;
    text-align: center;
    position: relative;
    top: 20%;
    color: red;

    
    .info {
      p {
        font-size: 1.5rem;
        text-transform: capitalize;
      }

      h1 {
        font-size: 3rem;
        text-transform: uppercase;
      }
    }

    .chessboard {
      max-width: 100%;
      width: 1000px;
      border-radius: 20px;
      box-shadow: 5px 5px 45px rgba(0,0,0, 0.23);
    }
  }
  
`
export default Chessboard
