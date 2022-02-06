import React from 'react';
import {Outlet, NavLink} from 'react-router-dom'

import css from './Layout.module.css'

const Layout = () => {
    return (
        <div>
            <div className={css.layoutWrapper}>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/comments'>Comments</NavLink>
            </div>
            <div className={css.layoutOutlet}><Outlet/></div>

        </div>
    );
};

export {Layout};