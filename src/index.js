import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </HashRouter>
  </ApolloProvider>
);
