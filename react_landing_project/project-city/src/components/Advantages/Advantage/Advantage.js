import React from 'react';
import styles from './Advantage.module.css';

const Advantage = ({ advantage: {icon, text, desc} }) => {
	return (
		<div className={styles.advantageBlock}>
			<div className={styles.advantageIcon}>
				<img src={icon} alt={text}/>
			</div>
			
			<div className={styles.advantageTitle}>
				{text}
			</div>
			
			<div className={styles.advantageDesc}>
				{desc}
			</div>
		</div>
	);
}

export default Advantage;