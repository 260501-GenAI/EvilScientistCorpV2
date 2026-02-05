// This component consists of a variable header and table
// The value for the header and table is based on the data that gets passed in through props
// This is a HIGHLY REUSEABLE COMPONENT! Whenever we call it, we give it:
    // A value for the header
    // Values for the table

import { Container, Table } from "react-bootstrap"

// TODO: Define the props object here

export const DataDisplay:React.FC = () => {



    return(
        <Container className="mt-5">

            <h3>[table name here]</h3>

            {/* Here's a bootstrap table. Highly/easily customizable */}
            <Table bordered striped hover>
                <thead className="table-dark">
                    <tr>
                        <th>col1</th>
                        <th>col2</th>
                        <th>col3</th>
                    </tr>
                </thead>

                <tbody className="table-secondary">
                    <tr>
                        <td>val1</td>
                        <td>val2</td>
                        <td>val3</td>
                    </tr>
                    <tr>
                        <td>val1</td>
                        <td>val2</td>
                        <td>val3</td>
                    </tr>
                                        <tr>
                        <td>val1</td>
                        <td>val2</td>
                        <td>val3</td>
                    </tr>
                    <tr>
                        <td>val1</td>
                        <td>val2</td>
                        <td>val3</td>
                    </tr>
                </tbody>
            </Table>

        </Container>
    )

}