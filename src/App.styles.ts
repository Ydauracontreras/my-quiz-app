import styled, { createGlobalStyle } from 'styled-components';

import BGImge from './img/galaxy.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    
  }
  body {
    background-image: url(${BGImge});
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0 0px 3px;
  }
  h1 {
    background: #757F9A;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #D7DDE8, #757F9A);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #D7DDE8, #757F9A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-filter: drop-shadow(2px 2px #0085a3);
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin-top: 5vh;
    font-weight: bolder;
  }
  .start, .next {
    cursor: pointer;
    background: #D7DDE8;
    border: 2px solid #757F9A;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    border-radius: 10px;
    height: 50px;
    margin: 20px 0;
    padding: 0 40px;
    font-weight: bold;
    color: black;
  }
  .start {
    max-width: 500px;
  }
`;

