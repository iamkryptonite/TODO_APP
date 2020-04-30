import React, {Component} from 'react';
import {BrowserRouter , Route ,Switch} from 'react-router-dom'
import Navbar from './components/navbar';
import Contact from './components/contacts';
import Home from './components/home';
import {connect} from 'react-redux';

//==================================================================

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Navbar/>
            <Route exact path='/' component={Home} />
            <Route path='/contacts' component={Contact} />                  
          </div>
        </Switch>
      </BrowserRouter>
    );
  }  
}
const mapStateToProps = (state) =>{
    return {
      todos: state.todos
  }
}
export default connect(mapStateToProps)(App);
