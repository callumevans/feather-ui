import { h } from 'preact';
import styles from './home-component.scss';
import PostSummary from '../post-summary/post-summary';

const HomeComponent = () => (
    <div className={styles.postSummaryContainer}>
        <PostSummary title="title" />
        <PostSummary title="title" />
        <PostSummary title="title" />
        <PostSummary title="title" />
        <PostSummary title="title" />
    </div>
);

export default HomeComponent;