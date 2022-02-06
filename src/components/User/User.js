import React from "react";

const User = ({user}) => {

    const {id, name, username} = user;

    return (
        <div>
            {id}.{name}{username}
            <hr/>
        </div>
    );
};

export {User};