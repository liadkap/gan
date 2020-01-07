import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { StylesProvider, ThemeProvider, jssPreset } from "@material-ui/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
    direction: "rtl",
    palette: {
        primary: {
            main: '#1976d2',
            button: blue[400]
        },
        error: {
            main: red[400]
        }
    }
});

export default (props) =>
    <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    </StylesProvider>
