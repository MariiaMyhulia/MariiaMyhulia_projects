import React from 'react';
import styles from './Btn.module.css';

const Btn = props => <a href={props.btn} className={styles.button}>VISIT OUR BLOG</a>;
export default Btn;