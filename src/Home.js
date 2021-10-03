import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2><center>Welcome to It Takes Two!</center></h2>
        <div class="homeimage">
        <img src={require('./images/boardgame.jpg').default} alt={"Board Game"} />
        </div>
        <center><h3><p>Are you tired of looking around stores only to find party games meant for 4 or more people? <em>Look no more.</em>
        Our games are hand-picked for two or more players, because we at It Takes Two know what it's like when you want a quiet game night in with a loved one.</p></h3>
 
        <p>We specialize in games that are made specifically for two players, and games that can be played with more than two people (but are suitable for two as well!)
        </p>
        </center>
      </div>
    );
  }
}
 
export default Home;