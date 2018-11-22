import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {
    render() {
        return (
            <div>
                <p>Viewing {this.props.number} {this.props.number === 1 ? 'expense' : 'expenses'} totalling {numeral(this.props.total / 100).format('$0,0.00')}</p>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    number: selectExpenses(state.expenses, state.filters).length,
    total: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);