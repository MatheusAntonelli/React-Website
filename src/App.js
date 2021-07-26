import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Historia from './components/pages/Historia';
import MainPage from './components/pages/MainPage';

function App() {
  return(
    <>
      <Router>
          <Switch>
           <Route path='/' exact component={MainPage}/>
            <Route path='/historia' exact component={Historia}/>
         </Switch>
      </Router>

    </>
  )
  


 }

export default App;
