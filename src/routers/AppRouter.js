import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpensePage';
import AddIncomePage from '../components/AddIncomePage';
import EditExpensePage from '../components/EditExpensePage';
import EditIncomePage from '../components/EditIncomePage';
import BudgetDashboardPage from '../components/BudgetDashboardPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import IncomeDashboardPage from '../components/IncomeDashboardPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={BudgetDashboardPage} />
                <PrivateRoute path="/expenses" component={ExpenseDashboardPage} />
                <PrivateRoute path="/incomes" component={IncomeDashboardPage} />
                <PrivateRoute path="/createexpense" component={AddExpensePage} />
                <PrivateRoute path="/createincome" component={AddIncomePage} />
                <PrivateRoute path="/editexpense/:id" component={EditExpensePage} />
                <PrivateRoute path="/editincome/:id" component={EditIncomePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;