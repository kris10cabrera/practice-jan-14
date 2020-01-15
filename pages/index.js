import React from 'react'
import { render } from 'react-dom'
import Layout from '../components/Layout';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '#ffd3fb'
    }
  }
  render() {
    const createColor = () => {
      // source: https://gomakethings.com/a-better-way-to-generate-a-random-color-with-vanilla-js/
      let colorChoice ='#' + Math.floor(Math.random() * 16777215).toString(16);
      this.setState({ color: colorChoice})

    }
    
    return (
      <Layout color={this.state.color}>
      <section className="wrapper">
        <div>
          <h1>Hello, kris10 is testing out Next.js</h1>
          <p>Click the button to change the background color.</p>
          <button onClick={createColor}>🌈</button>
          <h4>{this.state.color}</h4>
          {}
        </div>
      <style jsx>
        {`
        button {
          font-size: 30px;
          padding: 10px 20px;
          background: white;
        }
        div {
          border: 2px solid black;
          padding: 10px 10px;
          font-family: sans-serif;
          width: 70%;
          max-width: 600px;
          margin: 20px auto;
          text-align: center;
          background: white;
        }

        `}
      </style>
      </section>
      </Layout>
    )
  }
}

