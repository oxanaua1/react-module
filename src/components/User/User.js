import React from 'react';

import './UserStyles.css';

const User = (props) => {

    let {id, name, getUserId} = props;


    return (
        <div className={'Wrapper'}>

            <h3 className={'UserContent'}>{id}. {name}</h3>
            <button onClick={() => {
                getUserId(id)
            }}>Get Details
            </button>


        </div>
    );
};

export default User;