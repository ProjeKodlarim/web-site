import React from 'react';
import './App.css';
import Navigationbar from './layouts/Navigationbar';
import Index from './route/Index';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './layouts/Dashboard';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      {/* <Index/> */}
      <Navigationbar />
      <Container className='main'>
        <Dashboard />
      </Container>

    </div>
  );
}

export default App;
