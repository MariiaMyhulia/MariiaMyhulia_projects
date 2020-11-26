import React from 'react';
import styles from './Modal.module.css';

const Modal = ({active, setActive}) => {
	return (
		<div
			className={active ? styles.modal + ' ' + styles.active : styles.modal}
			onClick={() => setActive(false)}
		>
			<div
				className={active ? styles.modal__content + ' ' +  styles.active : styles.modal__content}
				onClick={e => e.stopPropagation()}
			>
				<div className={styles.form + ' form'}>
					<div className={styles.form__title}>Back Call</div>
					
					<form className={styles.form__area + ' form__area'}>
						<div className={styles.form__areaField + ' form__areaField'}>
							<input type="text" placeholder='Full Name'/>
						</div>
						
						<div className={styles.form__areaField + ' form__areaField'}>
							<input type="email" placeholder='Email'/>
						</div>
						
						<div className={styles.form__areaField + ' form__areaField'}>
							<input type="text" placeholder='Number'/>
						</div>
						
						<div className={styles.form__areaField + ' form__areaField form__areaSubmit ' + styles.form__areaSubmit}>
							<button type='submit'>Submit</button>
						</div>
					</form>
				</div>
				
				<div
					className={styles.form_close + ' form_close'}
					onClick={() => setActive(false)}
				></div>
			</div>
		</div>
	);
}

export default Modal;
