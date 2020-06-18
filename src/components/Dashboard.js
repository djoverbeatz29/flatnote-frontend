import React from 'react';

class Dashboard extends React.Component {

  render(){
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path='/dashboard/users' component={NoteContainer} />
                    <Route path='/dashboard/edit/:id' component={Login} />
                </Switch>
            </div>
      </Router>
    );
  }
};

export default Dashboard;