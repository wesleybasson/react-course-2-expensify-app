import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <div className="header__content">
                    <Link className="header__title header__title--margin-right" to="/dashboard">
                        <h1>Expensify</h1>
                    </Link>
                    <Link className="button button--link" to="/incomes">Incomes</Link>
                    <Link className="button button--link" to="/expenses">Expenses</Link>
                </div>
                <button className="button button--link" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);