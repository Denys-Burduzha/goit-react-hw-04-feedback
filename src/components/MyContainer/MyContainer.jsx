

import React from "react";
import styles from './MyContainer.module.css';

const MyContainer = ({children}) => (
    <div className={styles.feedbackContainer}>
        {children}
    </div>
);

export default MyContainer