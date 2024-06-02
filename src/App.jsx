// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <SearchBar />
    </div>
  );
}

export default App;
