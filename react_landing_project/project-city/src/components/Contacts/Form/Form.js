import React from 'react';

//Styles
import styles from './Form.module.css';

const Form = () => {
	return (
		<div className={styles.form + ' form'}>
			<form className={styles.form__area + ' form__area'}>
				<div className={styles.form__areaField + ' form__areaField'}>
					<input type="text" name='fullName' id='fullName' placeholder='Full Name'/>
				</div>
				
				<div className={styles.form__areaField + ' form__areaField'}>
					<input type="email" name='email' id='email' placeholder='Email'/>
				</div>
				
				<div className={styles.form__areaField + ' form__areaField'}>
					<input type="text" name='number' id='number' placeholder='Number'/>
				</div>
				
				<div className={styles.form__areaField + ' form__areaField form__areaFieldText ' + styles.form__areaFieldText}>
					<textarea name='message' id='message' placeholder='Write your Message here...'></textarea>
				</div>
				
				<div className={styles.form__areaField + ' form__areaField form__areaSubmit ' + styles.form__areaSubmit}>
					<button type='submit' id='submitForm' name='submitForm'>Submit</button>
				</div>
			</form>
		</div>
	);
}

export default Form;