import React from 'react';
import styles from './Nav.module.css';

const Nav = ({btnActive, setBtnActive}) => {
	return (
		<nav className={styles.mainNav}>
			<ul
				className={btnActive ? styles.mainNav__list + ' ' + styles.menuActive : styles.mainNav__list}
				onClick={() => setBtnActive(!btnActive)}
			>
				<li className={styles.mainNav__listItem}>
					<a href="/">Home</a>
				</li>
				
				<li className={styles.mainNav__listItem}>
					<a href="/about-us">About Us</a>
				</li>
				
				<li className={styles.mainNav__listItem}>
					<a href="/team">Team</a>
				</li>
				
				<li className={styles.mainNav__listItem}>
					<a href="/blog">Blog</a>
				</li>
				
				<li className={styles.mainNav__listItem}>
					<a href="/services">Services</a>
				</li>
				
				<li className={styles.mainNav__listItem}>
					<a href="/contact-us">Contact Us</a>
				</li>
			</ul>
			
			<div
				className={btnActive ? styles.gamburger + ' ' + styles.btnActive : styles.gamburger}
				onClick={() => setBtnActive(!btnActive)}
			>
				<span className={styles.gamburger__item}></span>
				<span className={styles.gamburger__item}></span>
				<span className={styles.gamburger__item}></span>
			</div>
		</nav>
	);
}

export default Nav;
