import React, { Component } from 'react'
import Header from './header'
import { Link } from 'react-router-dom'
import axios from "axios"

export default class Landing extends Component {
    
    constructor(){
        super()

        this.state = {
            count: 0,
            sayings: "Hey",
            response: "",
        }
        this.changeHeader = this.changeHeader.bind(this)
    }
  
    componentDidMount(){
        
        axios.get("https://swapi.co/api/people/1").then( (resp) =>{
        console.log(resp.data)            
        this.setState({
            response: resp.data
    
            })
        }
    )
        
    }

    changeHeader(){
       let index = Math.floor(Math.random() * (5));
      console.log(index)
       let arr = ['test', 'heyo', 'this is changing', 'lol', 'other stuff']
       this.setState({
           sayings: arr[index]
       })
    }

    render() {
    return (
      <div>
        <Header  saying = {this.state.sayings}/>
        {/* COMP 37D-E2 */}
        <button onClick = {() => this.changeHeader()}> click on me to change the header</button>
        <div>
        
        <Link to = {"./page/1"} ><button>Click me to go to page 1</button></Link>
        <Link to = {"./page/2"} ><button>Click me to go to page 2</button></Link>
        <Link to = {"./page/3"} ><button>Click me to go to page 3</button></Link>
        </div>

        <div>
            <h1>This is hit by the star wars api with axios</h1>
            <h3> {this.state.response.name}</h3>
             <p>{this.state.response.height}</p> 
             
        </div>
      </div>
    )
  }
}
