import moment from 'moment';

export default [{
    id: '1',
    description: 'Salary',
    note: '',
    amount: 200000,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent Income',
    note: '',
    amount: 234500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Refund',
    note: '',
    amount: 10999,
    createdAt: moment(0).add(4, 'days').valueOf()
}];