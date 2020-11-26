import React from 'react';
import styles from './Advantages.module.css';

//Components
import Advantage from "./Advantage/Advantage";
import Btn from "../Btn/Btn";

//Images
import icon1 from "./Advantage/img/icon-1.png";
import icon2 from "./Advantage/img/icon-2.png";
import icon3 from "./Advantage/img/icon-3.png";

const Advantages = () => {
	const infoAdvantages = [
		{
			icon: icon1,
			text: 'Some Analytics',
			desc: 'Aenean nisi lectus, convallis non lorem sit amet, rhoncus malesuada justo'
		},
		{
			icon: icon2,
			text: 'We provide you love',
			desc: 'Aenean nisi lectus, convallis non lorem sit amet, rhoncus malesuada justo'
		},
		{
			icon: icon3,
			text: 'And Some Cloud',
			desc: 'Aenean nisi lectus, convallis non lorem sit amet, rhoncus malesuada justo'
		}
	];
	
	const AdvantagesListInfo = infoAdvantages.map((advantage, key) => {
		return <Advantage advantage={advantage} key={key} />
	});
	
	return (
		<section className={styles.advantages} id={styles.advantages}>
			<div className="container">
				<div className={styles.headerTop}>
					<h2 className={`titleBlock ${styles.teamList__title}`}>We provide you everything</h2>
					<div className={`descBlock ${styles.teamList__desc}`}>Maybe not everything, but we provide you some stuff.</div>
				</div>
				
				<div className={styles.advantagesList}>
					{AdvantagesListInfo}
				</div>

				<div className={styles.advantagesButton}>
					<Btn btn='/blog' />
				</div>
			</div>
		</section>
	);
}

export default Advantages;