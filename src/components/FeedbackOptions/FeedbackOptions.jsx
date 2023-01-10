

import React from "react";
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    const feedbacs = Object.keys(options);
    return feedbacs.map(feedbac => {
        return(
            <button 
                key={feedbac} 
                type="button" 
                className={styles.optionBtn} 
                name={feedbac}
                onClick={onLeaveFeedback}
            >
                {feedbac === 'good' ? 'Good' : feedbac === 'neutral' ? 'Neutral' : 'Bad' }  
        </button>
        );
    }
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback:PropTypes.func.isRequired,
}


export default FeedbackOptions;