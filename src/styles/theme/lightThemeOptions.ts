import {ThemeOptions} from '@mui/material/styles';
import {Bebas_Neue, Roboto} from "@next/font/google";
import NextLink from 'next/link';
import {forwardRef} from 'react';

const lightThemeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            light: '#51B371',
            main: '#fff',
            contrastText: '#A2A2A2',
        },
        secondary: {
            light: '#000000',
            main: '#385898',
        },
    },
    typography: {
        fontFamily: [
            'Oswald',
            '"Segoe UI"'
        ].join(','),
    }
};

export default lightThemeOptions;