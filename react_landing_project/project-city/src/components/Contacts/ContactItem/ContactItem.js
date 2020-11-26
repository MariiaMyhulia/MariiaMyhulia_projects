import React from 'react';
import styles from './ContactItem.module.css';

const ContactItem = ({itemContact, number}) => {
	let description = null;
	if (number === 0) {
		description = <a href={ "tel:" + itemContact.desc }>${ itemContact.desc }</a>;
	} else if (number === 1) {
		description = itemContact.desc;
	} else if (number === 2) {
		description = <a href={ "mailto:" + itemContact.desc }>{ itemContact.desc }</a>;
	} else {
		description = `No data...`;
	}
	
	return (
		<>
			<div className={styles.itemContact}>
				<div className={styles.itemContactImg}>
					<img src={itemContact.icon} alt={itemContact.desc}/>
				</div>
				
				<div className={styles.itemContactDesc}>
					{description}
				</div>
			</div>
		</>
	);
}

export default ContactItem;