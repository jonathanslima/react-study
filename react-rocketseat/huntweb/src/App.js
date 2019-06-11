/* Imports ****************************************/
import React from 'react';

/* CSS *******************************************/
import './styles.css';

/* Components ************************************/
import Header from './components/Header';
import Main from './pages/main';

const App = ()=>{
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;