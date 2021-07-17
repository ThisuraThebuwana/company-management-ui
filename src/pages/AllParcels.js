import React, {useEffect, useState} from 'react';
import {host} from "../Constants";
import Table from "../components/Table";
import SideNavBar from "../components/SideNavBar";

const AllParcels = (props) => {

    useEffect(() => {
        (
            async () => {
                if (props.isLoggedIn) {

                    let response;
                    if(props.isSuperAdmin){
                        response = await fetch(host + '/parcel/all-parcels', {
                            headers: {'Content-Type': 'application/json'},
                            credentials: 'include',
                        });
                    }else{
                        response = await fetch(host + '/parcel/parcels', {
                            headers: {'Content-Type': 'application/json'},
                            credentials: 'include',
                        });
                    }

                    const content = await response.json();
                    if (content.length === undefined) {
                    } else {
                        props.setTableContent(content);
                    }
                }
            }
        )();

    });
    return (
        <div>
            {props.tableContent ?
                <div className="Home">
                    <div className="row">
                        <div className="col-sm-2" style={{padding:0}}>
                            <SideNavBar/>
                        </div>
                        <div className="col-sm-10" style={{padding:10}}>
                            <Table tableContent={props.tableContent}/>
                        </div>
                    </div>
                </div> : 'You are not logged in'}

        </div>

    );
};

export default AllParcels;
