import { Button, Card, Form } from "react-bootstrap"

export const Chat:React.FC = () => {


    return(
        <Card>
            <h4>Evil Scientist Chat</h4>

            <Form.Control
            type="text"
            placeholder="Send a message to your virtual assistant..."

            className="mb-2"
            />

            <Button>Send Message</Button>

            
        </Card>
    )

}