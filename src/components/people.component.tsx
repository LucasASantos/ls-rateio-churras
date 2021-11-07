/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { Button, Form, FormControl, InputGroup, Row, Table, Col } from 'react-bootstrap';
import { BsTrash, BsPencil } from "react-icons/bs";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { People } from '../models/people.model';

import { ApplicationState, Actions } from '../store';

interface StateProps {
    peoples: People[]
}

interface State {
    name: string;
}

interface DispatchProps {
    createPeopleRequest(data: { state: People[], data: People }): void;
    loadRequest(): void;
}

type Props = StateProps & DispatchProps

class PeopleComponent extends Component<Props, State>{

    constructor(props: Props) {
        super(props);

        this.state = {
            name: ''
        }

        this.updateName = this.updateName.bind(this);
    }

    componentDidMount() {
        const { loadRequest } = this.props;

        loadRequest();
    }


    updateName(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ name: event.target.value });
    }



    render() {

        const { peoples, createPeopleRequest } = this.props;
        const { name } = this.state;


        return (
            <div className="people-component">

                <h3>Cadastre uma pessoa</h3>
                <p> Aqui você vai cadastrar uma pessoa que vai participar da divisão do churras.</p>

                <Row className="justify-content-md-center">
                    <Col lg="5">

                        <InputGroup >
                            <InputGroup.Text id="inputGroup-sizing-lg">Nome</InputGroup.Text>
                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={this.updateName} />
                        </InputGroup>
                    </Col>

                    <Col lg="1">
                        <Button onClick={() => createPeopleRequest({ state: peoples, data: new People(name) })} variant="outline-dark">Salvar</Button>{' '}
                    </Col>
                </Row>
                <hr/>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {peoples.map(people => (
                            <tr key={people.id}>
                                <td>{people.name}</td>
                                <td><BsPencil /><BsTrash /></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    };
}

const mapStateToProps = (state: ApplicationState) => ({
    peoples: state.people.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PeopleComponent);
