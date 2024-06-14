import { createGlobalStyle } from "styled-components";

const GlobalSTyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body{
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
    background-image: url('/images/bg-intro-mobile.png');
    background-repeat:no-repeat;
    background-position: center; 
    background-color: #FF7979;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:8.8rem;
    padding-bottom:6.8rem;
    @media (min-width: 1440px){
        background-image: url('/images/bg-intro-desktop.png');
        padding: 12.1rem 16.5rem;
    }
}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html{
    font-size:62.5%;
}
button{
    outline: none;
    border: none;
    font-family: "Poppins", sans-serif;
}

  
`;

export default GlobalSTyles;
