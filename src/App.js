import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'
import Jumbotron from 'react-bootstrap/Jumbotron';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      genderIs:'',
      name:'',
      loading:'',
    }
  }
  findGender = async()=>
  {
    var nameEntered=document.getElementById('name').value;
    
    console.log(this.state.name);
    // if(response.status ===422)
    if(nameEntered.length==0)
    {
      document.getElementById('show').innerHTML='Please Enter Name first then click';      
    }
    else
    {
      const response=await fetch(`https://api.genderize.io?name=`+nameEntered);
      const myJson = await response.json();
        this.setState({
        genderIs:myJson.gender
      })
      console.log(myJson);
      console.log(this.state.genderIs)
      if(this.state.genderIs===null)
      {
        document.getElementById('show').innerHTML='name not found try different one';
      }
      else
      {
        document.getElementById('show').innerHTML=this.state.genderIs;
      }
  }
}
  render(){
    return(
      <div>
<Jumbotron>
  <p>
  <h1>Gender Detector</h1>
  This is a simple react-js app which will tell you the gender of a person
       by just entering name of a person.
    </p>
  <p>
  </p>
</Jumbotron>
<center>
       <label>
      <Alert variant="success"> Enter Your First Name:</Alert>
          <input id="name" type="text" name="name" style={{marginLeft:"10px" , padding:"10px"}} required/>
      </label></center>
      <center>
      <Button variant="dark" onClick={this.findGender} style={{marginLeft:"10px"}} >Click to find Gender</Button>
      <h1 id="show"></h1>
      </center>
      </div>
      
    );
  }
}
export default App;
