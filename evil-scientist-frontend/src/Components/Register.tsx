import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const Register:React.FC = () => {

    //Set up state for username and password
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    //define my useNavigate hook so we can switch URLs programmatically 
    const navigate = useNavigate()

    //Use the useRef and useEffect hooks to "focus" our username input box on component load
    const usernameRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        usernameRef.current?.focus() //"focus" whatever the ref is pointing to, so the user can type right away
    }, [])

    //Function that sends a Register request
    const register = async () => {

        //take all of the state fields and package them into an object to send
        const newUser = {
            username:username,
            password:password,
            email:email
        }

        //send the newUser object as a POST request to create a new user in the DB

        //NOTE this different axios syntax! Good for processing after the response
            //then(): do this if the request succeeds
            //catch(): do this if the request fails
            //we could have also used finally() to execute some logic at the end no matter what
        await axios.post("http://127.0.0.1:8000/sql/", newUser, 
            {headers:{"Content-Type":"application/json"}}) //need this when sending JSON
        .then(
            (response) => {
                alert(response.data.username + " created!")
                navigate("/")
            }
        )
        .catch(
            //pop up with generic error message. 
            //our API doesn't handle SQL errors well, maybe your project can? :)
            () => alert("Something went wrong! Try again")
        )

    }

    return(
        // Bootstrap gives us this Container element - it does some default padding/centering
        <Container>
            <h1>Register for an Account:</h1>

            <div>
                <Form.Control
                    type="text"
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    ref={usernameRef}
                />
            </div>

            <div>
                <Form.Control
                    type="password"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>

            <div>
                <Form.Control
                    type="text"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>

            <Button className="btn-success m-1" onClick={register}>Register</Button>
            <Button className="btn-dark m-1" onClick={()=>navigate("/")}>Back</Button>
        </Container>
    )

}