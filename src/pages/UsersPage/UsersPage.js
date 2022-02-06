import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {User} from "../../components";
import {getAllUsers} from "../../store/user.slice";

const UsersPage = () => {

    const {users, status, errors} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <div>
            {status}
            {users.map(user => <User key={user.id} user={user}/>)}
            {errors}

        </div>
    );
};

export {UsersPage};