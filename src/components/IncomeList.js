import React from 'react';
import { connect } from 'react-redux';
import IncomeListItem from './IncomeListItem';
import selectIncomes from '../selectors/incomes';

export const IncomeList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Incomes</div>
            <div className="show-for-desktop">Income</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {
                props.incomes.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Incomes</span>
                    </div>
                ) : (
                    props.incomes.map((income) => (
                        <IncomeListItem key={income.id} {...income} />
                    ))
                )
            }        
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        incomes: selectIncomes(state.incomes, state.filters)
    };
};

export default connect(mapStateToProps)(IncomeList);
