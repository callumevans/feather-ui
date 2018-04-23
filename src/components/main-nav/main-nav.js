import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './main-nav.scss';

const MainNav = () => (
    <nav className={styles.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/projects">Projects</NavLink>
    </nav>
);

export default MainNav;