import React from 'react';
import styles from './Persone.module.css';
import Social from "../../Social/Social";

const Person = ({ person: {job, name, photo, soc} }) => {
	return (
		<div className={styles.teamList__item}>
			<div className={styles.teamList__photo}>
				<img src={photo} alt={name} />
			</div>
			
			<div className={styles.teamList__meta}>
				<div className={styles.teamList__name}>
					{name}
				</div>
				
				<div className={styles.teamList__job}>
					{job}
				</div>
				
				<div className={styles.teamList__soc}>
					<Social soc={soc} />
				</div>
			</div>
		</div>
	);
}

export default Person;
