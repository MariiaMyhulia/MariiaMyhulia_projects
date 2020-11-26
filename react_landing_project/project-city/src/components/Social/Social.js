import React from 'react';
import styles from './Social.module.css';

const Social = ({soc}) => {
	const socialList = soc.map((socItem, key) => {
		console.log(socItem);
		return (
			<a key={key} href={socItem} className={styles.socialListItem} target="_blank"></a>
		);
	});
	return (
		<div className={styles.socialList}>
			{socialList}
		</div>
	);
}

export default Social;
