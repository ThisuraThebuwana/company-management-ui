const host = (() => {
    return 'http://localhost:8000/api';
})();

const COLUMNS = [
    {
        Header: 'Index',
        accessor: 'index'
    },
    {
        Header: 'Datetime',
        accessor: 'datetime'
    },
    {
        Header: 'Tracking No',
        accessor: 'tracking_no'
    },
    {
        Header: 'Order No',
        accessor: 'order_no'
    },
    {
        Header: 'Name',
        accessor: 'name'
    },
    {
        Header: 'Address',
        accessor: 'address'
    },
    {
        Header: 'Phone No',
        accessor: 'phone_no'
    },
    {
        Header: 'Weight',
        accessor: 'weight'
    },
    {
        Header: 'Rate',
        accessor: 'rate'
    },
    {
        Header: 'Status',
        accessor: 'status'
    },
    {
        Header: 'Status Date',
        accessor: 'status_date'
    },
];


export {host, COLUMNS};
