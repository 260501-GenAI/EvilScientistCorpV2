import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const Login:React.FC = () => {

    //define my useNavigate hook so we can switch URLs programmatically 
    const navigate = useNavigate()

    //Function that sends a Login request
    const login = () => {
        navigate("/dashboard")
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
                />
            </div>

            <div>
                <Form.Control
                    type="password"
                    placeholder="password"
                    name="password"
                />
            </div>

            <Button className="btn-success m-1" onClick={login}>Login</Button>
        </Container>
    )

}