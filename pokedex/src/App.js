import './App.css';
import Header from './Header';
import PokemonCard from './PokemonCard';
import {useState} from "react";
function App() {
    
    const [pokemonArray, setPokemonArray] =useState([]);
    
    // Part 2: Change the variable that holds the array of pokemon data to a React state variable
   const fetchRandoPk = ()=> {
    fetch("https://pokeapi-ptvv.onrender.com/pokemon/team")
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        setPokemonArray(data);
    })
   }

   

   const pokemonCardsHTML = pokemonArray.map(pokemon => (
    <PokemonCard
    key={pokemon.id}
    image_url={pokemon.image_url}
    title={pokemon.title}
    type={pokemon.type}
    alt={pokemon.description}

    />

   ))

    for(var i = 0; i < pokemonArray.length; i++) {
        var pokemon = pokemonArray[i];
        var pokemonCardHTML = <PokemonCard image_url={pokemon.image_url} title={pokemon.title} type={pokemon.type} />

        pokemonCardsHTML.push(pokemonCardHTML);
    }


  return (
    <div className="App">

        <Header />

        <div id="mainContent">
            <div id="pokemonCardSection">
                {pokemonCardsHTML}

            </div>
        </div>

        <div id="refresh">
            <button onClick ={fetchRandoPk }id="getRandomPokemonButton"> 
                <img src="./refresh.png" alt="" />
            </button>
            <h3>Get random pokemon</h3>
        </div>

    </div>
  );
}

export default App;
