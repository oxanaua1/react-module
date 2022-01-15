import React from 'react';

const User = (props) => {

    let {id, name, getUserId} = props;


    return (
        <div>

            <h3>{id}. {name}</h3>
            <button onClick={()=>{getUserId(id)}}>Get Details </button>



        </div>
    );
};

export default User;