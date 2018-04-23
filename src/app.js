import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import layoutStyles from './layout.scss';

import Headshot from './components/headshot/headshot';
import MainNav from './components/main-nav/main-nav';
import SocialIcons from './components/social-icons/social-icons';
import HomeComponent from './components/home-component/home-component';
import Post from './components/post/post';

const App = () => (
    <div>
        <BrowserRouter>
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
                    <Switch>
                        <Route exact path='/' component={HomeComponent} />
                        <Route path='/posts/:seoTitle' component={Post} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    </div>
);

export default App;