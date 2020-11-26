import React from 'react';
import styles from './Team.module.css';

//Components
import Person from "./Person/Person";

//images
import photo1 from './Person/img/photo-1.png';
import photo2 from './Person/img/photo-2.png';
import photo3 from './Person/img/photo-3.png';

const Team = () => {
	const infoEmployee = [
		{
			photo: photo1,
			name : 'Mark Once',
			job  : 'Designer & Front-End Developer',
			soc  : [
				'https://twitter.com',
				'https://instagram.com'
			]
		},
		{
			photo: photo2,
			name : 'Justin Twice',
			job  : 'Founder & CEO',
			soc  : [
				'https://twitter.com',
				'https://instagram.com'
			]
		},
		{
			photo: photo3,
			name : 'Antonio Never',
			job  : 'Someone & Somewhere',
			soc  : [
				'https://twitter.com',
				'https://instagram.com'
			]
		},
	];
	
	const PersonInfo = infoEmployee.map((person, key) => {
		return <Person person={person} key={key} />
	});
	
	return (
		<section className={styles.teamList} id={styles.team}>
			<div className="container">
				<div className={styles.headerTop}>
					<h2 className={`titleBlock ${styles.teamList__title}`}>This is our team</h2>
					<div className={`descBlock ${styles.teamList__desc}`}>We are small but effective and...</div>
				</div>
				
				<div className={styles.teamList__area}>
					{PersonInfo}
				</div>
			</div>
		</section>
	);
}

export default Team;
