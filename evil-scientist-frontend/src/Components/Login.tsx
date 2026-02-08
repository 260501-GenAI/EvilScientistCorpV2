import { useEffect, useRef, useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { store } from "../GlobalData/store"
import { useUser } from "../ContextApi/UserContext"

export const Login:React.FC = () => {

    //Defining a variable that gives access to the User data in our UserContext
    const { setUser } = useUser();

    //Set up state for username and password
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    //define my useNavigate hook so we can switch URLs programmatically 
    const navigate = useNavigate()

    //Use the useRef and useEffect hooks to "focus" our username input box on component load
    const usernameRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        usernameRef.current?.focus() //"focus" whatever the ref is pointing to, so the user can type right away
    }, [])

    //Function that sends a Login request
    const login = () => {

        //hardcoded - this would be an HTTP request

        if(username == "evilguy" && password == "password"){

            // OLD - global data file - Set user info in the global data store
            // store.loggedInUser = {"id":1, "username":"evilguy", "email":"suprevl@gmail.com"}

            //Using context api now - set the user data in the UserContext

            const loggedInUser = {"id":1, "username":"evilguy", "email":"suprevl@gmail.com"}

            setUser(loggedInUser)

            //Also, setting username data in localStorage so it persists on refresh
            localStorage.setItem("loggedInUsername", loggedInUser.username)

            navigate("/dashboard")
        } else {
            alert("Incorrect credentials!")
        }
        
    }

    return(
        // Bootstrap gives us this Container element - it does some default padding/centering
        <Container>
            <h1>Evil Scientist Corp. Login</h1>

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

            <Button className="btn-success m-1" onClick={login}>Login</Button>
            <Button className="btn-dark m-1" onClick={()=>navigate("/register")}>Register</Button>
        </Container>
    )

}