import React from 'react';
import styles from './post-summary.scss';
import { NavLink } from 'react-router-dom';

const PostSummary = ({ title }) => (
    <div>
        <NavLink to={`/posts/seo-title`} className={styles.summaryLink}>
            <article>
                <h1>{title}</h1>
                <time dateTime="2018-04-23">April 23</time>
                <section>
                    <p>
                    Swag you know I'm a real OG and baby I ain't from the TO no one can stop me.
                    I'd like to be an architect, that would be cool, cause I like drawing got your girlfriend at my crib watching Netflix I'm all fancy, yeah I'm popping Pellegrino.
                    Let the music blast we gon' do our dance got your girlfriend at my crib watching Netflix what you got, a billion could've never bought.
                    If I was your boyfriend, I'd never let you go I like The Notebook baby know for sho', I'll never let you go. And all the haters I swear they look so small from up here I make good grilled cheese and I like girls but something would be nothing.
                    </p>
                </section>
            </article>
        </NavLink>
    </div>
);

export default PostSummary;