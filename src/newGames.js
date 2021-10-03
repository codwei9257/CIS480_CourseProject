import React, { Component } from "react";
 
class newGames extends Component {
  render() {
    return (
      <div>
        <h1><center>New Games</center></h1>
        <table width="100%">
          <tr>
           <td><figure><img src={require('./images/BetrayalAtHouse.jpg').default} height={300} width={300} alt={"Betrayal At House on the Hill"}/><figcaption>$82 USD</figcaption></figure></td>
           <td><p>The creak of footsteps on the stairs, the smell of something foul and dead, the feel of something crawling down your back – this and more can be found in the exciting refresh of the Avalon Hill favorite Betrayal at House on the Hill. 
             This fun and suspenseful game is a new experience almost every time you play – you and your friends explore “that creepy old place on the hill” 
             until enough mystic misadventures happen that one of the players turns on all of the others. </p><button type="submit">Add to Cart</button></td></tr>
               <tr>
               <td><figure><img src={require('./images/Stratego.jpg').default} height={300} width={300} alt={"Stratego"} /><figcaption>$29 USD</figcaption></figure></td>
           <td><p>Two armies clash…who will be victorious? Stratego is the classic game of battlefield strategy that has sold over 20 million copies worldwide. For over 50 years, Stratego has thrilled strategy 
             game fans by inspiring them to challenge an opponent and attempt to lead their army to victory. Two players command Napoleonic armies and devise plans to deploy troops, using strategic attacks and clever 
             deception to break through the opponent’s line and capture the flag! No stickers to apply! For 2 players.</p><button type="submit">Add to Cart</button></td>
          </tr>
          <tr>
          <td><figure><img src={require('./images/Everdell.jpg').default} height={300} width={300} alt={"Everdell"} /><figcaption>$75 USD</figcaption></figure></td>
           <td><p>From Everfrost to Bellsong, many a peaceful year have passed in Everdell — but the time has come for new territories to be settled and new cities to be established. You will be the head of a group of 
             critters intent on just such a task. There are buildings to construct, lively characters to meet, events to host— 
             you will have a busy year ahead of you! Will the sun shine brightest on your city before the winter moon rises?.</p><button type="submit">Add to Cart</button></td>
          </tr>
        </table>

      </div>
    );
  }
}
 
export default newGames;