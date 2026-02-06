/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { DataDisplay } from "./DataDisplay"
import { Chat } from "./Chat"

//Custom Datatype for Pokemon. Could have also been an interface if we planned to make subtypes
type Pokemon = {
    name:string
    sprites:{
        front_default:string
        back_default:string
    }
}

export const Dashboard:React.FC = () => {

    //useState hooks for the retrieved Pokemon and for user data
    const [pokemon, setPokemon] = useState<Pokemon>()
    //Note the use of "any", which is a TS datatype that can be "any" time. 
    const [users, setUsers] = useState<any>([])

    //useEffect is a hook we can use to invoke some functionality when some event occurs
    //This is often used to make something happen as soon as the component renders
    useEffect(() => {
        //ignore the error - it DOES work
        getRandomPokemon()
        getAllUsers()
    }, []) //[] makes it so this useEffect triggers ONCE on component load

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

    //This function sends a GET request to the API to get all users 
    const getAllUsers = async () => {

        const users = await axios.get("http://127.0.0.1:8000/sql/")

        console.log(users.data)

        setUsers(users.data)

        console.log(users)

    }


    return(
        <>
            <Button onClick={getRandomPokemon}>Reshuffle Minion</Button>

            <h3>Your evil minion is: {pokemon?.name}</h3>
            <img src={pokemon?.sprites.front_default} alt="pokemon" />
            <img src={pokemon?.sprites.back_default} alt="pokemon" />

            {/* Here's a nested component - we're passing it props for the header and table */}
            <DataDisplay 
                title="Users"
                columns={["username", "id", "password", "email"]}
                data={users}
                />

            <br />

            <Chat/>

        </>
    )

}