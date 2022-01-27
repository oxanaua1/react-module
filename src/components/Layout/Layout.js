import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import css from './Layout.module.css'

const Layout = () => {
    return (
        <div>
            <div className={css.header}><NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/character'}>Character</NavLink>
                <NavLink to={'/episode'}>Episode</NavLink>
                <NavLink to={'/location'}>Location</NavLink>
            </div>
            <div className={css.outlet}><Outlet/></div>

        </div>
    );
};

export default Layout;