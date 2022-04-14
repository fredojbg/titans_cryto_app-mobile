// import original module declaration
import 'styled-components';
import { string } from 'yup';

// and extend it
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            text: string;
            placeHolderText: string;
            background: string;
            backgroundAlternative: string;
            primary: string;
            secondary: string;
            disabledColor: string;
            cancel: string;
            border: string;
            activeBorder: string;
            disabledBorder: string;
            svgOutline: string;
        };
    }
}
