import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import ClientsContainer from './components/Clients/ClientsContainer';
import Doctors from './components/Doctors/Doctors';
import Appointments from './components/Appointments/Appointments';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div>
      <Header />
      <div className='app-content'>
        <Route render={() => <MainPage />} exact path="/" />
        <Route render={() => <ClientsContainer />} path="/clients" />
        <Route render={() => <Doctors />} path="/Doctors" />
        <Route render={() => <Appointments />} path="/Appointments" />
      </div>
    </div>
  );
}

export default App;
