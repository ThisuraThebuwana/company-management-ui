const host = (() => {
    return 'http://localhost:8000/api';
})();

const COLUMNS = [
    {
        Header: 'Index',
        accessor: 'index'
    },
    {
        Header: 'Date & Time',
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
        Header: 'City',
        accessor: 'city'
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

const SidebarData = [
    {
        title: "Home",
        link: "/home",
    },
    {
        title: "Upload",
        link: "/upload",
    },
];


export {host, COLUMNS, SidebarData};
