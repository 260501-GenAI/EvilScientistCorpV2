import axios from "axios"
import { useState } from "react"
import { Button } from "react-bootstrap"

//Custom Datatype for Pokemon
type Pokemon = {
    name:string;
    sprite:string
}

export const Dashboard:React.FC = () => {

    //useState hook for the retrieved Pokemon
    const [pokemon, setPokemon] = useState<Pokemon>()

    /*An Axios request that gets a random Pokemon from PokeAPI
    Axios is a React library that lets us easily send HTTP requests to an API

    An "async" function is a function that can pause until the HTTP request returns 
    We use "async" with "await". "await" is what makes the function pause
    This lets us avoid the entire app stalling as we wait for the response to come back */
    const getRandomPokemon = async () => {

        //Get a random number and use axios to send a GET request to gather a random pokemon

        const randomNum = Math.floor(Math.random() * 1025) + 1

        const randomPokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/" + randomNum)

        console.log(randomPokemon)

        //Set the retrieved pokemon in state
        setPokemon(randomPokemon.data)

    }

    return(
        <>
            <Button onClick={getRandomPokemon}>Get Pokemon</Button>

            <h3>Your evil minion is: [name]</h3>
            
        </>
    )

}