import './App.css';
import React from 'react';
import Pic from './dob.jpg';

class App extends React.Component{
  state = {
    person : {
      Fullname :"sabri touihri",
      bio :"unstopable",
      imgSRC :Pic ,
      profession:"web dev"
    },
    show : true
  };
  viewUpdate = () => {
    this.setState({show: !this.state.show});
  }
  render(){
    return (
    <div className="Root">
      <button className="make-me-pretty" onClick={this.viewUpdate}>Hide me</button>
      <div className="App" style={{display: (this.state.show) ? "flex" : "none"}}>
      <img src={this.state.person.imgSRC} alt="pic"/>
      <div className="data">
        <p>
          <span>Full name</span> : {this.state.person.Fullname}
        </p>
        <p>
          <span>Bio</span> : {this.state.person.bio}
        </p>
        <p>
          <span>profession</span> : {this.state.person.profession}
        </p>
        
      </div>
      </div>
      
    </div>
    )
  }
}


export default App;
