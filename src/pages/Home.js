import React from 'react';
import { useTable } from 'react-table';
import Table from "../components/Table";

const Home = (props) => {
    return (
        <div>
            {props.tableContent ? <Table tableContent={props.tableContent}/> : 'You are not logged in'}

        </div>

    );
};

export default Home;
