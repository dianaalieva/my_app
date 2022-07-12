import '@emotion/react';
declare module '@emotion/react' {
    export interface Theme {
        title: string;
        color: {
            secondary: string,
            text: string,
            bg: string
        }
    }
}
