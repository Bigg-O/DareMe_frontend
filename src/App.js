import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import NavBar from './Components/NavBar'
import Body from './Containers/Body'
import NewDare from './Components/NewDare'
import LogIn from './Components/LogIn'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      logged_user: '',
      dares: []
    }
  }

  componentDidMount() {
    const logged_user = {
      id: "d1h98hd3190j",
      username: "Bigg-O",
      wallet: 100,
      profile_pic_url: "https://www.fakepersongenerator.com/Face/male/male1084242792541.jpg",
      about: "Internetaholic. Total creator. Passionate coffee expert. Hipster-friendly travel buff."
    }
    const data = require('./temp_data.json')

    this.setState({ logged_user })
    this.setState({ dares: data.dares })
  }

  handlePayment = (dare_id, amount) => {
    let dares = [...this.state.dares]
    let dare = dares.find(dare => dare.id === dare_id)
    let user = this.state.logged_user

    if (dare.amount + amount <= dare.wanted_profit && amount <= user.wallet) {
      user.wallet -= amount
      dare.amount += amount
      this.setState({ user })
      this.setState({ dares })
    }
  }

  handleNewDare = (e) => {
    console.log(e)
  }

  render() {
    const { logged_user, dares } = this.state
    return (
      <LogIn />
      // <Router>
      //   <NavBar user={logged_user} />
      //   <br />

      //   <Route exact path="/">
      //     <Body dares={dares} onPay={this.handlePayment} />
      //   </Route>
      //   <Route exact path="/new_dare">
      //     <NewDare
      //       user={logged_user}
      //       onSubmit={this.handleNewDare}
      //     />
      //   </Route>
      // </Router>
    )
  }
}

export default App