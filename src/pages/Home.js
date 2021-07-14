import React, {useEffect, useState} from 'react';
import {host} from "../Constants";
import Table from "../components/Table";
import SideNavBar from "../components/SideNavBar";

const Home = (props) => {

    const [tableContent, setTableContent] = useState(null);

    useEffect(() => {
        (
            async () => {
                if (props.isLoggedIn) {
                    let response = await fetch(host + '/parcel/all-parcels', {
                        headers: {'Content-Type': 'application/json'},
                        credentials: 'include',
                    });

                    if (response.status === 401) {
                        response = await fetch(host + '/parcel/parcels', {
                            headers: {'Content-Type': 'application/json'},
                            credentials: 'include',
                        });
                    }

                    const content = await response.json();
                    if (content.length === undefined) {
                    } else {
                        setTableContent(content);
                    }
                }
            }
        )();

    });
    return (
        <div>
            {tableContent ?
                <div className="Home">
                    <div className="row">
                        <div className="col-sm-2">
                            <SideNavBar/>
                        </div>
                        <div className="col-sm-10">
                            <Table tableContent={tableContent}/>
                        </div>
                    </div>
                </div> : 'You are not logged in'}
        </div>

    );
};

export default Home;
