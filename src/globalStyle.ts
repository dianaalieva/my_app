import { css } from '@emotion/react'

export const GlobalStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:wght@500&family=Russo+One&family=The+Nautigal&display=swap');

    body {
        font-family: 'Russo One', sans-serif;
        margin: 0;
 		width: 100vw;
        height: 100vh;
        ::-webkit-scrollbar {
            width: 0;
        }
    }

    * {
        box-sizing: border-box;
    }
`;
