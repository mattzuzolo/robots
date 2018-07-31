import React from "react";

import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

const url = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props){
    super(props);

    this.state = ({
      botData: [],
      currentRoster: [],
      currentBot: {},
      detailPageDisplaying: false
    })
  }

  handleClick = (event, bot) => {
    let clonedRoster = this.state.currentRoster

    if (clonedRoster.includes(bot)){
      let botIndex = clonedRoster.indexOf(bot);
      if (botIndex !== -1){
        clonedRoster.splice(botIndex, 1);
        return this.setState({currentRoster:clonedRoster})
      }
    }
    clonedRoster.push(bot);
    this.setState({ currentRoster: clonedRoster })
  }

  handleCardClick = (event, bot) => {
    let clonedRoster = this.state.currentRoster;
    if (this.state.currentRoster.includes(bot) === false){
      this.setState({
        detailPageDisplaying: !this.state.detailPageDisplaying,
        currentBot: bot
      })
    }
    else {
      let botIndex = clonedRoster.indexOf(bot);
      if (botIndex !== -1){
        clonedRoster.splice(botIndex, 1);
        return this.setState({currentRoster:clonedRoster})
    }
    }
  }

  handleEnlistClick = (event, bot) => {
    let clonedRoster = this.state.currentRoster;

    if (clonedRoster.includes(bot)){
      let botIndex = clonedRoster.indexOf(bot);
      if (botIndex !== -1){
        clonedRoster.splice(botIndex, 1);
        return this.setState({currentRoster:clonedRoster})
      }
    }


      clonedRoster.push(bot);
      this.setState({
        currentRoster: clonedRoster,
        detailPageDisplaying: !this.state.detailPageDisplaying
       })
  }

  componentDidMount(){
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({botData: data}))
  }

  render() {
    console.log("display detail", this.state.detailPageDisplaying)

      if (this.state.detailPageDisplaying){
        return (
          <div>
            <YourBotArmy
              currentRoster={this.state.currentRoster}
              handleClick={this.handleClick}
              handleCardClick={this.handleCardClick}
            />
            <BotSpecs
              bot={this.state.currentBot}
              handleCardClick={this.handleCardClick}
              handleEnlistClick={this.handleEnlistClick}
            />
          </div>
      )}

      else {
        return (
        <div>
          <YourBotArmy
            currentRoster={this.state.currentRoster}
            handleClick={this.handleClick}
            handleCardClick={this.handleCardClick}
          />
          <BotCollection
            botData={this.state.botData}
            handleClick={this.handleClick}
            handleCardClick={this.handleCardClick}
          />
        </div>
      )}
  }

}

export default BotsPage;
