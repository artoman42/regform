import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RegistrationFormComponent } from './Component/RegistrationFormComponent';
import { RegistrationFormCreator } from './Containers/RegistrationFormCreator';

function App() {
  return (
    <div className="App">
        <RegistrationFormCreator/>
    </div>
  );
}

export default App;
