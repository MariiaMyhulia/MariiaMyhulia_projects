import React from 'react'
import styles from '../Years.module.css';

const Item = props => {
	return(
		<div className={styles.years__item + ' clearfix ' + props.dataClass}>
			<div className={styles.years__itemContent}>
				<div className={styles.years__itemYear}>
					{props.title}
				</div>
				
				<div className={styles.years__itemText}>
					{props.text}
				</div>
			</div>
		</div>
	);
}

export default Item;