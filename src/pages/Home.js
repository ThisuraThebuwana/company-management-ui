import React from 'react';

const Home = (props) => {

    return (
        <div>
            {props.name ? props.name : 'You are not logged in'}
        </div>
    );
};

export default Home;
