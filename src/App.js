import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GoDequest from './pages/GoDequest';
import Home from './pages/Home';
import RightContent from './components/RightContent';
import Wallet from './pages/Wallet';
import Profile from './pages/Profile';

const App = () => (
  <div className="App">
    <Header />
    {window.location.host.split('.')[0] === 'app' ? (
      <BrowserRouter>
        {' '}
        <div className="flex">
          <Sidebar />
          <div className="mr-d-20 flex min-h-[100vh] grow rounded-t-deq bg-deq-bg-light p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/get-deso" element={<div>Deso</div>} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<div>Logout</div>} />
            </Routes>
            <RightContent />
          </div>
        </div>
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
