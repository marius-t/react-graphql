import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { App } from './App';
import reportWebVitals from './reportWebVitals';

import './global.scss'; // app & third-party component styles

import 'antd/lib/style/index.less';

const { REACT_APP_GIT_TOKEN } = process.env;

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `bearer ${REACT_APP_GIT_TOKEN}`,
  },
  cache: new InMemoryCache(),
}); // antd core styles

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
