import React, { Component } from 'react'

export default class Landing extends Component {
  render() {
      console.log(this.props.match.params.id)
    return (
      <div>
         <h1>
             {`this is page #${this.props.match.params.id}`}
         </h1>
      </div>
    )
  }
}
