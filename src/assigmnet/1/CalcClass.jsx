import { Component } from 'react';
import styles from './Cals.module.css';


export default class CalcClass extends Component {
  constructor() {
    super()
    this.state = {
      num1: '',
      num2: '',
      ans: 0,

    }
    this.handleForm = (e) => {
      e.preventDefault()
    }
    this.handleAdd = () => {
      const { num1, num2 } = this.state;
      this.setState({ ans: parseFloat(num1) + parseFloat(num2) });
    }

    this.handleSub = () => {
      const { num1, num2 } = this.state;
      this.setState({ ans: parseFloat(num1) - parseFloat(num2) });
    }

    this.handleDiv = () => {
      const { num1, num2 } = this.state;
      this.setState({ ans: parseFloat(num1) / parseFloat(num2) });
    }

    this.handleMul = () => {
      const { num1, num2 } = this.state;
      this.setState({ ans: parseFloat(num1) * parseFloat(num2) });
    }

   
  }


  render() {
    return (
      <div>
        <h1>Class</h1>
        <form onSubmit={this.handleForm}>
          <input type="number"
            className={styles.ip}
            placeholder="Please Enter Number Only."
            value={this.state.num1}
            onChange={(e) => { this.setState({num1:e.target.value}) }}
          /> <hr />
          <input type="number"
            className={styles.ip}
            placeholder="Please Enter Number Only."
            value={this.state.num2}
            onChange={(e) => { this.setState({num2:e.target.value}) }}
          /><br /> <br />

          <button onClick={this.handleAdd}>Add</button>
          <button onClick={this.handleSub}>Sub</button>
          <button onClick={this.handleDiv}>Div</button>
          <button onClick={this.handleMul}>Mul</button>
          <h2>Result : {this.state.ans}</h2>
        </form>

      </div>
    )
  }
}
