import { Button, Container, Form } from "react-bootstrap"

export const Login:React.FC = () => {



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

            <Button className="btn-success m-1">Login</Button>
        </Container>
    )

}