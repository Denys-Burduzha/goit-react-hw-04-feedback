

import React from "react";
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage,}) => (
    <div className={styles.statistics}>
        <ul className={styles.statisticsList}>
            <li>
                Good: <span>{good}</span>
            </li>
            <li>
                Neutral: <span>{neutral}</span>                
            </li>
            <li>
                Bad: <span>{bad}</span>
            </li>
            <li>
                Total: <span>{total}</span>
            </li>
            <li>
                PositivePercentage: <span>{positivePercentage}%</span>
            </li>
        </ul>
    </div>
);


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;