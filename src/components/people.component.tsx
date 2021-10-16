/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Button, FormControl, InputGroup, Table } from 'react-bootstrap';
import { BsTrash, BsPencil } from "react-icons/bs";

function PeopleComponent(): JSX.Element {
    return (
        <div className="people-component">
            <h3>Cadastre uma pessoa que vai participar da divisão</h3>
            <InputGroup >
                <InputGroup.Text id="inputGroup-sizing-lg">Nome</InputGroup.Text>
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>

            <Button variant="outline-primary">Salvar</Button>{' '}

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th />
                        <th>Nome</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td><BsPencil/><BsTrash/></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td><BsPencil/><BsTrash/></td>

                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default PeopleComponent;
