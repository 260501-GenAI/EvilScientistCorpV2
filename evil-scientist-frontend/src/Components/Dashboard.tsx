import axios from "axios"
import { Button } from "react-bootstrap"

export const Dashboard:React.FC = () => {

    /*An Axios request that gets a random Pokemon from PokeAPI
    Axios is a React library that lets us easily send HTTP requests to an API

    An "async" function is a function that can pause until the HTTP request returns 
    We use "async" with "await". "await" is what makes the function pause
    This lets us avoid the entire app stalling as we wait for the response to come back */
    const getRandomPokemon = async () => {

        const randomNum = Math.floor(Math.random() * 1025) + 1

        const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/" + randomNum)

        console.log(pokemon)

    }

    return(
        <>
            <h1>Dashboard</h1>

            <Button onClick={getRandomPokemon}>Get Pokemon</Button>
        </>
    )

}