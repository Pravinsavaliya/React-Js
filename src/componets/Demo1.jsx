import React, { Component } from 'react'

export default class Demo1 extends Component {
    constructor() {
        super()
        this.state = {
          name: 'demo',
          age : 20,
          city : "Ahemdabad",
    
        };
      }
  render() {
    return (
      <div>
        <h1>my name is {this.state.name}</h1>
      </div>
      
    )
  }
}
