import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  render(){
    // console.log("Props of BotCollection", this.props.handleClick)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.props.botData.map(bot => (
            <BotCard key={bot.id} bot={bot} handleCardClick={this.props.handleCardClick} />
          ))}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;


// handleClick={this.state.handleClick}
