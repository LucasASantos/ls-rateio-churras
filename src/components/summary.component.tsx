/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Summary } from '../models/summary.model';
import { Actions, ApplicationState } from '../store';


interface SummaryStateProps {
  summary: Summary[]
}


class SummaryComponent extends Component<SummaryStateProps>{
  componentDidMount() { }

  render() {

    const { summary } = this.props
    return (
      <div className="total-component">
          <h4>Total de pessoas: {summary[0].countPeople}</h4>
          <h4>Média de gastos: {summary[0].spendPerPerson}</h4>

          <ul>
            {summary[0].peopleRecive.map(people => (
                <li key={people.id}>{people.name}</li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  summary: state.summary.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SummaryComponent);

