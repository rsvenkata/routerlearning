// import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";
import React, { Component } from 'react'

const MenuBar = (props) => { 
   console.log(props);
  return ( 
<h1> Welcome User {props.val}</h1>
) 
}

class DoctorForm extends Component {
  state = {
    jsonvalue: 'Nagarjuna'
  }

  // sendData = () => {
  //   console.log(this.props.parentCallback('naga'));
  // }

render() {
    // console.log(this.props)
    // console.log(this.props.parentCallback('nagarjuna'))
    return (
     <div>
       {'this.props.parentCallback(\'nagarjuna\')'}
     </div>
    )
  }
}

class App extends Component {

  state = {
    jsonvalue: ''
  }

  callbackFunction = (childData) => {
    this.setState({jsonvalue: childData})
  }

  render() {
    return (
      <Router>
      <div className="App">
        
        <Route
          path="/menubar" exact component ={() => <MenuBar val={this.state.jsonvalue}/>}    // here render is used for functional based component but component can be used for both
        >
        </Route>

        <Route
          path="/doctorform" exact component = { () => <DoctorForm parentCallback = {this.callbackFunction} /> } //here componet is used to represent clas based component
        >
        </Route>

      </div>
    </Router>
     
    )
  }
}

export default App;