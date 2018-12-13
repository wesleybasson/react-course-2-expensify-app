import React from 'react';
import { connect } from 'react-redux';
import IncomeForm from './IncomeForm';
import { startAddIncome } from '../actions/incomes';

export class AddIncomePage extends React.Component {
    onSubmit = (income) => {
        this.props.startAddIncome(income);
        this.props.history.push('/incomes');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Income</h1>
                    </div>
                </div>
                <div className="content-container">
                    <IncomeForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddIncome: (income) => dispatch(startAddIncome(income))
});

export default connect(undefined, mapDispatchToProps)(AddIncomePage);