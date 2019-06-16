/* Imports ****************************************/
import React from 'react';
import Routes from './routes/routes'

/* CSS *******************************************/
import './styles.css';

/* Components ************************************/
import Header from './components/Header';

const App = ()=>{
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;