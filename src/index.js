import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { ApolloProvider, ApolloClient, createNetworkInterface } from "react-apollo";

const networkInterface = createNetworkInterface({
  uri: "https://api.github.com/graphql"
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
