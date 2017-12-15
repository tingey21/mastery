import React, { Component } from 'react'
import {connect} from "react-redux"
import { addPerson, getpeople } from "../ducks/reducer"
import axios from 'axios'
 class UsesRedux extends Component {
     constructor(){
         super()
         this.state = {
           people: '',
           name: '',
           age: 0,
         }
      
     }

    
     newUser(){
    let name = this.state.name;
    let age = this.state.age
      setTimeout( () => {
        this.props.addPerson(name, age);
      },400)
        

     }

    
  render() {
      console.log(this.props.people)
      let people = this.props.people.map( (person) => {
        console.log(person.data[0].id)
        return(
           
        <div> 
        <div>Name:{person.data[0].person}</div>
        <div> age: {person.data[0].age}</div>
        </div>
        )

      })
    return (
      <div>
        <input type="text" onChange = { (e) => { console.log(e.target.value); this.setState({
          name: e.target.value
        })}}/>
        <input type="number" onChange = { (e) => this.setState({
          age: e.target.value
        })} />
        <button onClick = {() => this.newUser()}></button>
        {people}
      </div>
    )
  }
}

function mapStateToProps(state){
return state
}




export default connect(mapStateToProps, {addPerson, getpeople})(UsesRedux)
