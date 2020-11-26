import React from 'react';
import styles from './Contacts.module.css';

//Components
import ContactItem from "./ContactItem/ContactItem";

//Images
import icon1 from "./ContactItem/img/icon-1.png";
import icon2 from "./ContactItem/img/icon-2.png";
import icon3 from "./ContactItem/img/icon-3.png";
import Form from "./Form/Form";

const Contacts = () => {
	const infoContacts = [
		{
			icon: icon1,
			desc: '555-222-333'
		},
		{
			icon: icon2,
			desc: 'Here is some address'
		},
		{
			icon: icon3,
			desc: 'somemail@hotmail.com'
		}
	];
	
	const ContactsListInfo = infoContacts.map((itemContact, key) => {
		return <ContactItem itemContact={itemContact} key={key} number={key} />
	});
	
	return (
		<section className={styles.contacts} id={styles.contacts}>
			<div className="container">
				<div className={styles.headerTop}>
					<h2 className={`titleBlock ${styles.contacts__title}`}>Contac Us</h2>
					<div className={`descBlock ${styles.contacts__desc}`}>We know what we need to do</div>
				</div>
				
				<div className={styles.contactsList}>
					{ContactsListInfo}
				</div>
				
				<Form />
			</div>
		</section>
	);
}

export default Contacts;