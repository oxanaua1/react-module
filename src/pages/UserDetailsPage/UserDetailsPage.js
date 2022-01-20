import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {Link, useLocation, useParams} from "react-router-dom";

import css from './UserDetails.module.css'
import {userService} from "../../services/user.service";

const UserDetailsPage = () => {

    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();

    useEffect(() => {

        if (state) {
            setUser(state)
        }
        userService.getById(id).then(value => setUser({...value}))

    }, [id]);

    return (

        <div>

            {user &&
                <div className={css.wrapper}>
                    <div>Id: {user.id}</div>
                    <div>Name:{user.name}</div>
                    <div>User Name: {user.username}</div>
                    <div>Email: {user.email}</div>

                    <button>
                        <Link to={id.toString()}> Show User's Posts</Link>
                    </button>

                </div>

            }
            <div><Outlet/></div>

        </div>
    );
};

export {UserDetailsPage};