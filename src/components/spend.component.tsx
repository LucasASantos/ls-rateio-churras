/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Button, Form, FormControl, InputGroup, Table } from 'react-bootstrap';
import { BsTrash, BsPencil } from "react-icons/bs";


function SpendComponent(): JSX.Element {
  return (
    <div className="spend-component">
      <h3>Cadastre uma compra que foi efetuada no role</h3>

      <InputGroup className="mb-3">
        <InputGroup.Text>R$</InputGroup.Text>
        <FormControl aria-label="Dollar amount (with dot and two decimal places)" type="number" placeholder="Valor" />
      </InputGroup>

      <Form.Select>
        <option>Quem pagou</option>
      </Form.Select>

      <Button variant="outline-primary">Salvar</Button>{' '}

      <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>1</td>
                        <td><BsPencil/><BsTrash/></td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>2</td>
                        <td><BsPencil/><BsTrash/></td>

                    </tr>
                </tbody>
            </Table>
    </div>
  );
}

export default SpendComponent;
