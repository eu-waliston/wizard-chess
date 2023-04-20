import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <NAV>
      <ul>
        <a href="#home">home</a>
        <a href="#figures">figures</a>
        <a href="#chessboard">chessboard</a>
      </ul>
    </NAV>
  )
}

const NAV = styled.div`
  position: fixed;
  width: 100%;

  ul {
    text-align: left;

    margin-top: 20px;

    a {
      margin-left: 5%;
      text-decoration: none;
      text-transform: uppercase;
      color: red;
      padding: 10px;
      transition: 0.5s;
      font-weight: 600;

      &:hover {
        background-color: red;
        border-radius: 2px;
        color: #fff;
      }
    }
  }
`

export default Navbar
