import '@emotion/react';

import dark from '../src/themes/dark'
import light from '../src/themes/light'

declare module '@emotion/react' {
    export interface DefaultTheme {
        title: string;
        color: {
            text: string,
            bg: string
        }
    }
}

declare module '@emotion/react' {
    export interface DefaultTheme {
        color: typeof dark.color;
    }
}

declare module '@emotion/react' {
    export interface DefaultTheme {
        color: typeof light.color;
    }
}