import { h } from 'preact';
import { Router, route } from 'preact-router';
import layoutStyles from './layout.scss';

import Headshot from './components/headshot/headshot';
import MainNav from './components/main-nav/main-nav';
import SocialIcons from './components/social-icons/social-icons';
import HomeComponent from './components/home-component/home-component';
import Post from './components/post/post';

const App = () => (
    <div>
            <div id={layoutStyles.mainContainer}>
                <div className={layoutStyles.headshotContainer}>
                    <Headshot />
                </div>

                <div className={layoutStyles.socialIconsContainer}>
                    <SocialIcons />
                </div>

                <nav className={layoutStyles.navMenuContainer}>
                    <MainNav />
                </nav>

                <div className={layoutStyles.mainContentContainer}>
                    <Router>
                        <HomeComponent path='/' />
                        <Post path='/posts/:seoTitle' />
                    </Router>
                </div>
            </div>
    </div>
);

export default App;