import { ApolloProvider } from "@apollo/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import client from "./services/ApolloClient";

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
