/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { Accordion, Row, Table } from 'react-bootstrap';
import { BsPencil, BsTrash } from 'react-icons/bs';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import  SummaryComponent from './summary.component';
import { Total } from '../models/total.model';
import { Actions, ApplicationState } from '../store';


interface TotalStateProps {
  total: Total[]
}


class TotalComponent extends Component<TotalStateProps>{
  componentDidMount() { }

  render() {

    const { total } = this.props
    return (
      <div className="total-component">
        <h3>Resultado do rateio</h3>
        <p>Aqui voce vai tem o valor total do rateio por pessoa.</p>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Entenda o resultado</Accordion.Header>
            <Accordion.Body>

              <p>Quem está <b>negativo deverá pagar</b> e quem está positivo, o valor total indica o valor total que ele vai receber de volta.</p>
              <p>
                O cálculo do rateio é feito da seguinte forma:
                <b>(soma dos gastos / número de pessoas) - valor pago por pessoa</b>.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <SummaryComponent />
        <hr />
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor do gasto</th>
              <th>Vai restituir</th>
              <th>Valor total</th>
            </tr>
          </thead>
          <tbody>
            {total.map(item => (
              <tr key={item.id}>
                <td>{item.people.name}</td>
                <td>{item.spendValue}</td>
                <td>{item.isRecive}</td>
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
