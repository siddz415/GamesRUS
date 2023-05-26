import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';

import Search from './pages/Game';

import Nav from './components/Nav';
import OrderHistory from './pages/OrderHistory';
import Success from './pages/Success';
import { StoreProvider } from './utils/GlobalState';
import SearchBar from './components/SearchBar';
import LatestReviews from './pages/LatestReviews';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />

            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/search"

                element={

                  <SearchBar />}
              />
              <Route
                path="/search/:reviewName"

                element={

                  <SearchBar />}
              />
              <Route
                path="/latestreviews"
                element={<LatestReviews />}
              />

              <Route
                path="/success"
                element={<Success />}
              />
              <Route
                path="/orderHistory"
                element={<OrderHistory />}
              />
              <Route
                path="/products/:id"
                element={<Detail />}
              />
              <Route
                path="*"
                element={<NoMatch />}
              />
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
