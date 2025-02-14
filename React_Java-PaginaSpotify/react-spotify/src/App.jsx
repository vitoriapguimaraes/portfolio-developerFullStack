import React from 'react';

import "./reset.css";
import "./vars.css";
import './App.css';
import Header from './componentes/Header/Header.jsx';
import Sidebar from './componentes/Sidebar/Sidebar.jsx';
import Footer from './componentes/Footer/Footer.jsx';
import Main from './componentes/Main/Main.jsx';

function App() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;