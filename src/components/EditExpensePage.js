import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import RemoveModal from './ExpensifyModal';

export class EditExpensePage extends React.Component {
    state = {
        modalOpen: false
    };
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense );
        this.props.history.push('/expenses');
    };
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/expenses');
    };
    handleOpen = () => {
        this.setState({ modalOpen: true });
    };
    handleClose = () => {
        this.setState({ modalOpen: false });
    };
    render() {
        const title = "Remove Expense";
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.handleOpen}>{title}</button>
                </div>
                <RemoveModal
                    modalOpen={this.state.modalOpen}
                    handleClose={this.handleClose}
                    handleAction={this.onRemove}
                    title={title}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);