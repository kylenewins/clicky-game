import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cards from "./cards.json";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter"
import Card from "./components/Card"



class App extends React.Component{
  state = {cards}

  // shuffle = id =>{
  //   const friends = this.state.friends.filter(friend => friend.id !== id)
  
  //   this.setState({friends})
  // }

  clickHandle = function(){
    console.log("click received")
  }
    render(){
      return(
  
        <Wrapper>
          {this.state.cards.map(single=> (
            <Card
            // shuffle={this.shuffle}
            clickHandle={this.clickHandle}
            id={single.id}
            key={single.id}
            name={single.name}
            image={single.image}
            />
          ))}
        </Wrapper>
      )
  }
}

export default App;
