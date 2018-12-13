import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectIncomes from '../selectors/incomes';
import selectIncomesTotal from '../selectors/incomes-total';
import numeral from 'numeral';

export class IncomesSummary extends React.Component {
    render() {
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Viewing <span>{this.props.number}</span> {this.props.number === 1 ? 'income' : 'incomes'} totalling <span>{numeral(this.props.total / 100).format('$0,0.00')}</span></h1>
                    {this.props.notshown !== 0 && (
                        <h3 className="page-header__subtitle"><span>{this.props.notshown}</span> {this.props.notshown === 1 ? 'income' : 'incomes'} not shown.</h3>
                    )}
                    <div className="page-header__actions">
                        <Link className="button" to="/createincome">Add Income</Link>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    number: selectIncomes(state.incomes, state.filters).length,
    total: selectIncomesTotal(selectIncomes(state.incomes, state.filters)),
    notshown: selectIncomes(state.incomes, {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }).length - selectIncomes(state.incomes, state.filters).length
});

export default connect(mapStateToProps)(IncomesSummary);