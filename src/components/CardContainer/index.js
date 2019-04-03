import React from "react"
import Wrapper from "../Wrapper"
import Header from "../Header"
import cards from "../../cards.json"
import Card from "../Card"


class CardContainer extends React.Component{
    state = {
    cards,
    clickedArray: [],
    score:0,
    topScore: 0,
    message: ""
  }

  gameOver = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score}, function() {
        console.log(this.state.topScore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }
  
  handleClick = (id) => {
     const shuffledArray = this.shuffleArray(cards);
     this.setState({cards: shuffledArray});

     if (this.state.clickedArray.includes(id)) {
       this.gameOver()
     }
     else {
       this.setState({
         clickedArray: this.state.clickedArray.concat([id]),
         score: this.state.score + 1,
         message: "Correct!",
       });
     }
     if (this.state.score > this.state.topScore) {
       this.setState({ topScore: this.state.score });
     }
  };
  
  shuffleArray = (picturesArray) => {
    for (let i = picturesArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [picturesArray[i], picturesArray[j]] = [picturesArray[j], picturesArray[i]];
    }
    return picturesArray;
}

  
      render(){
        return(
          <div>
            <Header score={this.state.score} topScore={this.state.topScore} message = {this.state.message}/>
            <Wrapper>
            {this.state.cards.map(single=> (
              <Card
              clickHandle={this.handleClick}
              id={single.id}
              shuffle={this.shuffle}
              key={single.id}
              name={single.name}
              image={single.image}
              />
            ))}
          </Wrapper>
          </div>
         
        )
    }
  }

  export default CardContainer