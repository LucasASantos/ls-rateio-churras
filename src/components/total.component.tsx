/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { BsPencil, BsTrash } from 'react-icons/bs';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Total } from '../models/total.model';
import { Actions, ApplicationState } from '../store';


interface TotalStateProps {
  total: Total[]
}


class TotalComponent extends Component<TotalStateProps>{
  componentDidMount(){}

  render(){

    const {total} = this.props
    return (
      <div className="total-component">
        <Table striped bordered hover>
                      <thead>
                          <tr>
                              <th>Nome</th>
                              <th>Valor do gasto</th>
                              <th>Valor total</th>
                          </tr>
                      </thead>
                      <tbody>
                          {total.map(item => (
                              <tr key={item.id}>
                                  <td>{item.people.name}</td>
                                  <td>{item.spendValue}</td>
                                  <td>{item.totalValue}</td>
                              </tr>
                          ))}
                      </tbody>
          </Table>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  total: state.total.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TotalComponent);
