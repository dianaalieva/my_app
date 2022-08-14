import '@emotion/react';
declare module '@emotion/react' {
    export interface Theme {
        title: string;
        color: {
            primary: string,
            secondary: string,
            accent: string,
            text: string,
            bg: string
        }
    }
}
