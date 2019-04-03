<h1>Clicky Game!</h1>
<p>This game is a very simple demonstration of react components, both stateful and stateless. The aim of the game is to click every picture without clicking the same one twice. The game stores the score and a few other variables to the state, so that they are continuously updated and re-rendered. The components function as follows...</p>

<h3>App.js/Index/js</h3>
<p>I left these two files alone, all the Index.js is doing is rendering the App.js to the Index.html, and all the App.js is doing is pulling in the CardContainer.js which hold all of the game's functionality.</p>

<h3>CardContainer.js</h3>
<p>This is where all of the apps functionality takes place. I had a lot of trouble understanding some of the concepts to make this app function, so i referred to a github repo that can be found here: https://github.com/shama009/Clicky-Game-React-App/blob/master/src/App.js. The app has three main functions that control the functionality:</p>
<ul>
    <li>The gameOver function first checks if your current score(stored in the state) is higher than the top score. If it is, it updates the topScore to your current score. It then empties the clicked array and alerts the player that they've lost, along with telling them their score</li>
    <li> The handleClick function first checks if you've clicked that card before, and if you have, it runs the gameOver function. If you haven't clicked that card already, it pushes that card to the clickedArray and increments the score by 1. It also checks if you have surpassed the topScore, and if you have, it also updates that value based off of your current score.</li>
    <li>Lastly, the shuffleArray function simply shuffles the indexes of the cards in the array so that the display in different places on the page. This function is called inside of the handleClick function.</li>
</ul>

<p>Inside the CardContainer's render() method, all of the app's layouts and components are rendered. A map function of the cards array is run to render each individual card with its respective props. It is then exported so that it can be imported into the App.js file</p>

<h3>Header</h3>
<p>This is just a simple bootstrap navbar to track the user's score and topscore. Both of these values are passed into this component as props from the CardContainer</p>

<h3>Wrapper</h3>
<p>This is also just a formatting component. It makes sure that the cards display in an aesthetically pleasing format and have consistent margins. All of the Cards are rendered inside of this wrapper</p>

<h3>Card</h3>
<p>The cards are the actual images that the player sees on the screen when playing the game. They pull in the data values as props from the CardContainer and create divs that function as buttons. The handleClick function is passed into each card as a prop as well.</p>