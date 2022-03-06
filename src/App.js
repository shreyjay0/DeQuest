import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import GoDequest from './pages/GoDequest';
import Home from './pages/Home';

const App = () => (
  <div className="App">
    <Header />
    {window.location.host.split('.')[0] === 'app' ? (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>{' '}
      </BrowserRouter>
    ) : (
      <div className="flex min-h-screen flex-col justify-center sm:py-12">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GoDequest />} />
          </Routes>
        </BrowserRouter>
      </div>
    )}
  </div>
);

export default App;
