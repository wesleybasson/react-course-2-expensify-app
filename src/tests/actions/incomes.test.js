import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    startAddIncome,
    addIncome,
    editIncome,
    startEditIncome,
    removeIncome,
    startRemoveIncome,
    setIncomes,
    startSetIncomes
} from '../../actions/incomes';
import incomes from '../fixtures/incomes';
import database from '../../firebase/firebase';

const uid = 'abc123uid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const incomesData = {};
    incomes.forEach(({ id, description, note, amount, createdAt}) => {
        incomesData[id] = { description, note, amount, createdAt };
    });
    database.ref(`users/${uid}/incomes`).set(incomesData).then(() => done());
});

test('should set up remove income action object', () => {
    const action = removeIncome({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_INCOME',
        id: '123abc'
    });
});

test('should remove incomes from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = incomes[1].id;
    store.dispatch(startRemoveIncome({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_INCOME',
            id
        });
        return database.ref(`users/${uid}/incomes/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('should set up edit income action object', () => {
    const action = editIncome('123abc', { note: 'new note value' });
    expect(action).toEqual({
        type: 'EDIT_INCOME',
        id: '123abc',
        updates: { note: 'new note value' }
    });
});

test('should edit income in firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = incomes[1].id;
    const updates = {
        description: 'Updated value',
        note: 'New note',
        amount: 100,
        createdAt: 1000000
    };
    store.dispatch(startEditIncome(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_INCOME',
            id,
            updates
        });
        return database.ref(`users/${uid}/incomes/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
            ...updates
        });
        done();
    });
});

test('should set up add income action object with provided values', () => {
    const action = addIncome(incomes[2]);
    expect(action).toEqual({
        type: 'ADD_INCOME',
        income: incomes[2]
    });
});

test('should add income to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const incomeData = {
        description: 'Bitcoin Payout',
        amount: 120000,
        note: 'Another payout',
        createdAt: 1000
    };
    store.dispatch(startAddIncome(incomeData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_INCOME',
            income: {
                id: expect.any(String),
                ...incomeData
            }
        });
        return database.ref(`users/${uid}/incomes/${actions[0].income.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(incomeData);
        done();
    });
});

test('should add income with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const incomeDefaults = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    store.dispatch(startAddIncome({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_INCOME',
            income: {
                id: expect.any(String),
                ...incomeDefaults
            }
        });
        return database.ref(`users/${uid}/incomes/${actions[0].income.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
            ...incomeDefaults
        });
        done();
    });
});

test('should setup set income action object with data', () => {
    const action = setIncomes(incomes);
    expect(action).toEqual({
        type: 'SET_INCOMES',
        incomes
    });
});

test('should fetch the incomes from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetIncomes()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_INCOMES',
            incomes
        });
        done();
    });
});