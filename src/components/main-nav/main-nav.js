import { h } from 'preact';
import { Link } from 'preact-router/match';
import styles from './main-nav.scss';

const MainNav = () => (
    <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/projects">Projects</Link>
    </nav>
);

export default MainNav;