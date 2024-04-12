import './App.css';
import { useState } from "react";

function App() {
    //Part 1-1
    const [showPunchline, setShowPunchline] = useState(false);
    const [jokeView, setJokeview] = useState({
        setup: "Why did the chicken cross the road?",
        punchline: "To get to the other side!"
    })
    

    
    var jokeCardVisibility = "hidden";
    if(showPunchline == true) {
        jokeCardVisibility = "visible";
    }

  return (
    <div className="App">
        <div id="header">
            <h1>View Joke</h1>
        </div>

        <div id="jokeSection">

        <div className="jokeCard">
            <h2 id="jokeSetup">{jokeView.setup}</h2>
            <h3 id="jokePunchline" style={{visibility: jokeCardVisibility}}>{jokeView.punchline}</h3>
            <button id="showPunchline" onClick={() => {
                //Part 1-1
                setShowPunchline(true);
                }}>See punchline</button>
        </div>


            <div id="refresh">
                <button onClick={()=>{
                    fetch("https://official-joke-api.appspot.com/random_joke")
                    .then(function(response) {
                        return response.json();
                    }).then(function(data){
                        setShowPunchline(false);
                     setJokeview(data);
                    },
                    console.log("Refreshing Joke..."))
                }}>
                    <img width="20" src="./refresh.png"/>
                </button>
                <h3>Refresh Joke</h3>

            </div>
        </div>
    </div>
  );
}

export default App;
