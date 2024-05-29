import React, { useState } from 'react';
import './App.css';
import TextForm from './Components/TextForm';
import PropTypes from 'prop-types';

import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import Acordian from './Components/Acordian';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState({
    msg: 'hello guys',
    type: 'success'
  });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };

  console.log(alert);

  return (
    <>
      <Navbar title="TexUtlilsss" home="about" about="about2" />

            <TextForm txt="Enter The Text" showalert={showAlert} setAlert={setAlert} />
          
      <div className='container'>
        <Alert alert={alert} />
      </div>
      
    </>
  );
}

export default App;
