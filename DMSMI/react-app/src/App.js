import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import ClientsContainer from './components/Clients/ClientsContainer';
import DoctorsContainer from './components/Doctors/DoctorsContainer';
import Appointments from './components/Appointments/Appointments';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div>
      <Header />
      <div className='app-content'>
        <Route render={() => <MainPage />} exact path="/" />
        <Route render={() => <ClientsContainer />} path="/clients" />
        <Route render={() => <DoctorsContainer />} path="/Doctors" />
        <Route render={() => <Appointments />} path="/Appointments" />
      </div>
    </div>
  );
}

export default App;
