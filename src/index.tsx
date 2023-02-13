import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { DeviceThemeProvider, SSRProvider } from '@salutejs/plasma-ui';
import { GlobalStyle } from './GlobalStyle';
import {Router} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {RecoilRoot} from 'recoil'

ReactDOM.render(
    <RecoilRoot>
        <DeviceThemeProvider responsiveTypo={true}>
            <BrowserRouter>
                <App />
                <GlobalStyle />
            </BrowserRouter>
        </DeviceThemeProvider>
    </RecoilRoot>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
