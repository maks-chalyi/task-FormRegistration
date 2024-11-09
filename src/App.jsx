
import main_bg from '/my-logo.png'
import styles from './app.module.css'
import { useState } from 'react'

function sendFormData(formData) {
	console.log('formData', formData)
}

export default function App() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')

	const [emailError, setEmailError] = useState(null)
	const [passwordError, setPasswordError] = useState(null)
	const [repeatPasswordError, setRepeatPasswordError] = useState(null)

	function validateEmail({ target }) {
		setEmail(target.value)
		let errorMessage = null
		if (!/^[\w_-]*$/.test(target.value)) {
			errorMessage = 'Ошибка. Email может содержать латинские буквы, тире или нижние подчеркивание'
		} else if (target.value.length > 12) {
			errorMessage = 'Ошибка. Поле email не может быть длиннее 12 символов'
		}
		setEmailError(errorMessage)
	}

	const onEmailBlur = ({ target }) => {
		if (target.value.length < 3) {
			setEmailError('Ошибка. Должно быть не меньше 3 символов')
		}
	}

	function validatePassword({ target }) {
		setPassword(target.value)
		let errorMessage = null
		if (target.value.length > 12) {
			errorMessage = 'Ошибка. Поле пароль не может быть длиннее 12 символов'
		}
		setPasswordError(errorMessage)
	}

	const onPasswordBlur = ({ target }) => {
		if (target.value.length < 3) {
			setPasswordError('Ошибка. В поле пароль должно быть не меньше 3 символов')
		}
	}

	function validateRepeatPassword({ target }) {
		setRepeatPassword(target.value)
		let errorMessage = null
		if (target.value.length > 12) {
			errorMessage = 'Ошибка. Поле повторить пароль не может быть длиннее 12 символов'
		}
		setRepeatPasswordError(errorMessage)
	}

	const onRepeatPasswordBlur = ({ target }) => {
		if (target.value.length < 3) {
			setRepeatPasswordError('Ошибка. В поле повторить пароль должно быть не меньше 3 символов')
		}
	}

	function onSubmit(event) {
		event.preventDefault()
		sendFormData({ email, password, repeatPassword })
	}

	return (
		<>
			<img src={main_bg} style={{ width: '300px', marginBottom: '40px' }} />
			<h1 style={{ marginBottom: '40px' }}>Start Coding...</h1>

			<div className={styles.registration}>
				<form className={styles.form} onSubmit={onSubmit}>
					{emailError && <span className={styles.errorLabel}>{emailError}</span>}
					{passwordError && <span className={styles.errorLabel}>{passwordError}</span>}
					{repeatPasswordError && <span className={styles.errorLabel}>{repeatPasswordError}</span>}
					<input
						className={styles.formField}
						type='text'
						name='email'
						placeholder='Enter email'
						value={email}
						onChange={validateEmail}
						onBlur={onEmailBlur}
					/>

					<input
						className={styles.formField}
						type='text'
						name='password'
						placeholder='Enter password'
						value={password}
						onChange={validatePassword}
						onBlur={onPasswordBlur}
					/>

					<input
						className={styles.formField}
						type='text'
						name='repeatPassword'
						placeholder='Enter password'
						value={repeatPassword}
						onChange={validateRepeatPassword}
						onBlur={onRepeatPasswordBlur}
					/>

					<button
						className={styles.formButton}
						type='submit'
						disabled={emailError !== null || passwordError !== null || repeatPasswordError !== null}
					>
						Зарегистрироваться
					</button>

				</form>
			</div>
		</>
	)
}