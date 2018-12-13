import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {
    render() {
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Viewing <span>{this.props.number}</span> {this.props.number === 1 ? 'expense' : 'expenses'} totalling <span>{numeral(this.props.total / 100).format('$0,0.00')}</span></h1>
                    {this.props.notshown !== 0 && (
                        <h3 className="page-header__subtitle"><span>{this.props.notshown}</span> {this.props.notshown === 1 ? 'expense' : 'expenses'} not shown.</h3>
                    )}
                    <div className="page-header__actions">
                        <Link className="button" to="/createexpense">Add Expense</Link>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    number: selectExpenses(state.expenses, state.filters).length,
    total: selectExpensesTotal(selectExpenses(state.expenses, state.filters)),
    notshown: selectExpenses(state.expenses, {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }).length - selectExpenses(state.expenses, state.filters).length
});

export default connect(mapStateToProps)(ExpensesSummary);