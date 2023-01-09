

import React from "react";
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({title, children}) => (
    <section className={styles.sectionFeedback}>
        <h1 className={styles.title}>{title}</h1>
        {children}
    </section>
)

Section.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Section