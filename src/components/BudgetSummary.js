import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectIncomesTotal from '../selectors/incomes-total';

export class BudgetSummary extends React.Component {
    render() {
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Budget {this.props.result >= 0 ? 'surplus' : 'deficit'} totals <span>{numeral(this.props.result / 100).format('$0,0.00')}</span></h1>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    result: selectIncomesTotal(state.incomes) - selectExpensesTotal(state.expenses)
})

export default connect(mapStateToProps)(BudgetSummary)