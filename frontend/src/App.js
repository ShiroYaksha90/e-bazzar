import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => (
  <Router>
    <Header />
    <main className="py-3">
      <Container>
        <Routes>
          <Route path="/" Component={HomeScreen} exact />
          <Route path="/product/:id" Component={ProductScreen} />
        </Routes>
      </Container>
    </main>
    <Footer />
  </Router>

);

export default App;