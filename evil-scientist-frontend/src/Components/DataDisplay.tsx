// This component consists of a variable header and table
// The value for the header and table is based on the data that gets passed in through props
// This is a HIGHLY REUSEABLE COMPONENT! Whenever we call it, we give it:
    // A value for the header
    // Values for the table

import { Container, Table } from "react-bootstrap"

//Defining the props object here - props is short for "properties"
//Props is just data sent from a parent component to a child component
type DataDisplayProps = {
    title:string
    columns:string[]
}

//Note the <generic> and the data in the arrow function's arguments. That's props
export const DataDisplay:React.FC<DataDisplayProps> = ({title, columns}) => {

    return(
        <Container className="mt-5">

            <h3>{title}</h3>

            {/* Here's a bootstrap table. Highly/easily customizable */}
            <Table bordered striped hover>
                <thead className="table-dark">
                    <tr>
                        {/* using the .map() function to iterate thru the columns and render a <th> for each */}
                        {columns.map(column => (
                            <th>{column}</th>
                        ))}
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