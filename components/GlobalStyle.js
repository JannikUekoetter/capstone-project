import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      :root {
          --text-primary: #0c2c4d;
          --background-primary: #edf0f5;
      }

      /* noto-sans-regular - latin */
        @font-face {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        src: local(''),
            url('/fonts/noto-sans-v27-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('/fonts/noto-sans-v27-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }
  
      * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
      }
  
      body {
          font-family: 'Noto Sans', sans-serif;
          background-color: var(--background-primary);
          color: var(--text-primary);
      }
      main {
        /* display: grid;
        align-items: center;
        justify-content: center; */
        margin: 0 auto;
        
      }

    
  `;

export default GlobalStyle;
