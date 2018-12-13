import React from 'react';
import { connect } from 'react-redux';
import IncomeForm from './IncomeForm';
import { startEditIncome, startRemoveIncome } from '../actions/incomes';
import RemoveModal from './ExpensifyModal';

export class EditIncomePage extends React.Component {
    state = {
        modalOpen: false
    };
    onSubmit = (income) => {
        this.props.startEditIncome(this.props.income.id, income );
        this.props.history.push('/incomes');
    };
    onRemove = () => {
        this.props.startRemoveIncome({ id: this.props.income.id });
        this.props.history.push('/incomes');
    };
    handleOpen = () => {
        this.setState({ modalOpen: true });
    };
    handleClose = () => {
        this.setState({ modalOpen: false });
    };
    render() {
        const title = "Remove Income";
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Income</h1>
                    </div>
                </div>
                <div className="content-container">
                    <IncomeForm
                        income={this.props.income}
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
    income: state.incomes.find((income) => income.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditIncome: (id, income) => dispatch(startEditIncome(id, income)),
    startRemoveIncome: (id) => dispatch(startRemoveIncome(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditIncomePage);