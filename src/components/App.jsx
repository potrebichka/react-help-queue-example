import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import NewTicketControl from './NewTicketControl';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketControl} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;