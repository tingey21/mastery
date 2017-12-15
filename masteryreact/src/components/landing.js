import React, { Component } from 'react'
import Header from './header'
export default class Landing extends Component {
    
    constructor(){
        super()

        this.state = {
            count: 0,
            sayings: "Hey"
        }
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
        <button onClick = {() => this.changeHeader()}></button>
      </div>
    )
  }
}
