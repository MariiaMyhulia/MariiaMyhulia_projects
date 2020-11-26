import React, { useState } from 'react';

//Styles
import styles from './Header.module.css';

//Components
import Nav from "./Nav/Nav";
import Modal from "../Modal/Modal";

const Header = () => {
	const [modalActive, setModalActive] = useState(false);
	const [btnActive, setBtnActive] = useState(false);
	
	return (
		<section className={styles.header} id={styles.header}>
			<div className="container">
				<Nav
					btnActive={btnActive}
					setBtnActive={setBtnActive}
				/>
				
				<div className={styles.headerTop + ' ' + styles.mainHeaderTop}>
					<h2 className={`titleBlock ${styles.header__title}`}>We build it with passion</h2>
					<div className={`descBlock ${styles.header__desc}`}>Just to be clear, we do this for fun not for you, just kidding.</div>
				</div>
				
				<div className={styles.headerBtn}>
					<button type='button' onClick={() => setModalActive(true)}>Call Me</button>
				</div>
				
				<div className={styles.headerDots}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			
			<Modal
				active={modalActive}
				setActive={setModalActive}
			/>
		</section>
	);
}

export default Header;
