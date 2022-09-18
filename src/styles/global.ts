import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html{
        font-size:62.5%;  
    }
    body{
        -webkit-font-smoothing:antialiased;
        background: #FAFAFA;
    }
    body, textarea, input, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    }
    h1,h2,h3,h4,h5,h6,strong{
        font-weight:600;
    }
    a,a:hover {
    text-decoration: none;
    color: unset;
    }
    ol,
    ul {
    list-style: none;
    }
    button{
        cursor:pointer;
    }
`
