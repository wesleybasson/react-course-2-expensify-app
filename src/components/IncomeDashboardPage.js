import React from 'react';
import IncomeList from './IncomeList';
import IncomeListFilters from './ExpenseListFilters';
import IncomesSummary from './IncomesSummary';

const IncomeDashboardPage = () => (
    <div>
        <IncomesSummary />
        <IncomeListFilters />
        <IncomeList />
    </div>
);

export default IncomeDashboardPage;