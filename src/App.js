import React from 'react';
import Routes from './Routes';

import Header from './components/_common/header';
import Footer from './components/_common/footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
