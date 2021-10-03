import React, { Component } from "react";

class bestSellers extends Component {
  render() {
    return (
      <div>
        <h1><center>Best Sellers</center></h1>
        <table width="100%">
          <tr>
           <td><figure><img src={require('./images/LordOfTheRings.jpg').default} height={300} width={300} alt={"Lord of the Rings: Journeys in Middle Earth"}/><figcaption>$82 USD</figcaption></figure></td>
           <td><p>Embark on your own adventures in J.R.R. Tolkien’s iconic world with the Lord of the Rings: Journeys in Middle-earth, 
             a fully cooperative, app-supported board game for one to five players! You'll battle villainous foes, make courageous choices, 
             and strike a blow against the evil that threatens the land—all as part of a thrilling campaign that leads you across the storied
             hills and dales of Middle-earth. Each individual game of journeys in Middle-earth is a single adventure in a larger campaign. 
             You'll explore the vast and dynamic landscapes of Middle-earth, using your skills to survive the challenges that you encounter on
              these perilous quests. As you and your fellow Heroes explore the wilderness and battle The dark forces arrayed against you, 
              the game's companion app guides you to reveal the looming forests, quiet clearings, and ancient halls of Middle-earth, 
              while also controlling the enemies you encounter. Whether you're venturing into the wild on your own or with close companions
               by your side, you can write your own legend in the history of Middle-earth.</p><button type="submit">Add to Cart</button></td></tr>
               <tr>
               <td><figure><img src={require('./images/sq-watergate-box.jpg').default} height={300} width={300} alt={"Watergate"} /><figcaption>$29 USD</figcaption></figure></td>
           <td><p>In June 1972, five men are arrested in Washington's watergate building. 
             What looks like a third-rate burglary attempt on the headquarters of the Democratic National Committee 
             induces journalists Bob Woodward and Carl Bernstein of the Washington post to start a thorough investigation. 
             Over the following two years, they discover that the five men were directed from within the white house to spy on political opponents. 
             As a consequence, in 1974 President Richard Nixon resigns from office to avoid impeachment. In Watergate, one player assumes the role of a journalist, while the other embodies the 
             Nixon administration-each with a unique set of cards. To win, the Nixon Administration must build up enough momentum to make it to the end of the Presidential term, whereas the journalist
            must gather enough evidence to connect two informants directly to the President. Of course, the Administration will do all in its power 
            to smother any evidence.</p><button type="submit">Add to Cart</button></td>
          </tr>
          <tr>
          <td><figure><img src={require('./images/catanStarfarers.jpg').default} height={300} width={300} alt={"Catan Starfarers"} /><figcaption>$75 USD</figcaption></figure></td>
           <td><p>It's the year 2700 and you've been selected to compete for the prestigious title of Ambassador to the Galactic Council. Not just anyone can become ambassador—
             you must earn fame and glory by leaving the known universe behind. Delve deep into the unknown, discover new Solar systems, meet new extraterrestrial lifeforms and 
             use your diplomacy so they will aid you with their powers. As you explore the space in between, you'll encounter wormholes, merchants, pirates and more. All of this is made
              easier with the right upgrades to your ship.</p><button type="submit">Add to Cart</button></td>
          </tr>
        </table>

      </div>
    );
  }
}
 
export default bestSellers;