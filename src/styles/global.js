import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-background: #FFF;
    --color-primary: #F2A30B;
    --color-primary-light: #FCC761;
    --color-secondary: #0C2FDF;
    --color-tertiary: #FFE182;
    --color-text: #252525;
    --color-text2: #FFF;
    --color-red: #B4423E; 
    --color-success: #7CC39C;
    --color-warning: #FBEA85;
    --color-error: #EA524F;
    font-size: 60%;   
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  nav{
    height: 80px;
    background: var(--color-primary);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: var(--color-text2);
    padding: 0px 20px;
  }
  ul{
    display: flex;
    flex-direction: row;
    overflow-y: auto;
    gap: 15px;
    list-style-type:none;
    padding: 15px;
  }
  li{
    max-width:30vw;
    border-radius: 10px;
    box-shadow: 5px 5px 5px gray;
    
    &:hover{
        cursor:pointer;
        box-shadow: 5px 5px 5px #F2A30B;
        transition: 0.75s;
    }
  }
  li > img{
    max-width:25vw;
  }
  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-light);
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
    cursor: pointer;
  }
`;