import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from 'react-router-dom';

import User from '../../components/User/User';
import css from './UsersPage.module.css'
import {userService} from '../../services/user.service';


const UsersPage = () => {

    const {id} = useParams();

    const [users, setUsers] = useState([]);

    useEffect(() => {

        userService.getAll().then(value => setUsers([...value]))

    }, []);


    return (
        <div>
            <div className={css.wrapper}>

                <div>{users.map(user => <User key={user.id} id={id} user={user}/>)}</div>

                <div><Outlet/></div>

            </div>


        </div>
    );
};

export {UsersPage};