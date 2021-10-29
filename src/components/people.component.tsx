/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { Button, FormControl, InputGroup, Table } from 'react-bootstrap';
import { BsTrash, BsPencil } from "react-icons/bs";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { People } from '../models/people.model';

import {ApplicationState, Actions}  from '../store';

interface StateProps {
    peoples: People[]
  }
  
  interface DispatchProps {
    createRequest(): void;
  }
  
  type Props = StateProps & DispatchProps

class PeopleComponent extends Component<Props>{
    componentDidMount(){
        const {createRequest} = this.props;
        
        createRequest();
    }


    render() {

        const {peoples} = this.props;

        return (
        <div className="people-component">
            <h3>Cadastre uma pessoa que vai participar da divisão</h3>
            <InputGroup >
                <InputGroup.Text id="inputGroup-sizing-lg">Nome</InputGroup.Text>
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>

            <Button  variant="outline-primary">Salvar</Button>{' '}

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

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th />
                        <th>Nome</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {peoples.map(people => (
                        <tr>
                            <td>{people.id}</td>
                            <td>{people.name}</td>
                            <td><BsPencil/><BsTrash/></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )};
}

const mapStateToProps = (state: ApplicationState) =>({
    peoples: state.people.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PeopleComponent);
