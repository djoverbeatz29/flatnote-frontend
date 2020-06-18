import React from 'react';
import Login from './Login'
// import Form from './Form'
// import Filter from './Filter'
// import NoteContainer from './NoteContainer'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/login' component={Login}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;