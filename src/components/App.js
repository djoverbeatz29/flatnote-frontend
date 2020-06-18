import React from 'react';
import Form from './Form'
import Filter from './Filter'
import NoteContainer from './NoteContainer'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/user/:id' component={NoteContainer} />
          <Route path='/login' component={Login}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;