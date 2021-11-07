/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { Component } from 'react';
import { Button, Form, FormControl, InputGroup, Table, Row, Col } from 'react-bootstrap';
import { BsTrash, BsPencil } from "react-icons/bs";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { People } from '../models/people.model';
import { Spend } from '../models/spend.model';
import { Actions, ApplicationState } from '../store';


interface SpendStateProps {
  peoples: People[]
  spends: Spend[]
}

interface State {
  value: number;
  peopleId: string;
}

interface SpendDispatchProps {
  createSpendRequest(data: { state: Spend[], data: Spend }): void;
  loadRequest(): void;
}

type SpendProps = SpendStateProps & SpendDispatchProps

class SpendComponent extends Component<SpendProps, State>{
  constructor(props: SpendProps) {
    super(props);

    this.state = {
      value: 0,
      peopleId: ''
    }

    this.updateValue = this.updateValue.bind(this);
    this.updatePeople = this.updatePeople.bind(this);
  }

  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }


  handleDataRequest() {
    const { peoples, spends } = this.props;
    const { peopleId, value } = this.state;

    const person = peoples.find(p => p.id === peopleId);

    if (!person) {
      console.log('erro pessoa null');
      throw Error();
    }

    console.log('aqui', person);


    return {
      state: spends,
      data: new Spend(
        person,
        value
      )
    }
  }

  updateValue(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: Number(event.target.value) });
  }

  updatePeople(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ peopleId: event.target.value });
  }

  render() {
    const { peoples, spends, createSpendRequest } = this.props;
    return (
      <div className="spend-component">
        <h3>Cadastre um gasto</h3>
        <p>Aqui você vai cadastrar a os valores que foram gastos no rolê e quem pagou</p>

        <Row className="justify-content-md-center">
          <Col lg="2">
            <InputGroup className="mb-3">
              <InputGroup.Text>R$</InputGroup.Text>
              <FormControl aria-label="Dollar amount (with dot and two decimal places)" type="number" placeholder="Valor" onChange={this.updateValue} />
            </InputGroup>
          </Col>
          <Col lg="3">
            <Form.Select onChange={this.updatePeople}>
              <option value="null">Quem pagou</option>
              {peoples.map(people => (<option key={people.id} value={people.id}>{people.name}</option>))}
            </Form.Select>
          </Col>
          <Col lg="1">

            <Button variant="outline-dark" onClick={() => createSpendRequest(this.handleDataRequest())}>Salvar</Button>{' '}
          </Col>
        </Row>
        <hr />
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {spends.map(spend => (
              <tr key={spend.id}>
                <td>{spend.people.name}</td>
                <td>{spend.value}</td>
                <td><BsPencil /><BsTrash /></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  peoples: state.people.data,
  spends: state.spend.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SpendComponent);
