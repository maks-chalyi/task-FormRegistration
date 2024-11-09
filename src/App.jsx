
import styles from './app.module.css'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const fieldsSchema = yup.object()
	.shape({
		email: yup.string()
			// .matches(/^[w_]*$/, 'Неверный логин. Допустимые символы: буквы, цифры и нижнее подчёркивание')
			.min(3, 'Неверный логин. Должно быть не меньше 3 символов')
			.max(20, 'Неверный логин. Должно быть не больше 20 символов'),
		password: yup.string()
			.matches(/^([^0-9]*)$/, 'Неверный логин. Допустимые символы: буквы, цифры и нижнее подчёркивание')
			.min(3, 'Неверный логин. Должно быть не меньше 3 символов')
			.max(20, 'Неверный логин. Должно быть не больше 20 символов'),
		repeatPassword: yup.string()
			.matches(/^([^0-9]*)$/, 'Неверный логин. Допустимые символы: буквы, цифры и нижнее подчёркивание')
			.min(3, 'Неверный логин. Должно быть не меньше 3 символов')
			.max(20, 'Неверный логин. Должно быть не больше 20 символов'),
	});

export default function App() {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm(
		{
			mode: 'onBlur',
			resolver: yupResolver(fieldsSchema),
		},
	)

	const emailError = errors?.email?.message
	const passwordlError = errors?.password?.message
	const repeatPasswordError = errors?.password?.message

	const onSubmit = (formData) => {
		console.log('formData', formData)
		reset()
	}

	return (
		<>

			<div className={styles.registration} onSubmit={handleSubmit(onSubmit)}>
				<form className={styles.form} >

					<div className={styles.formFieldItem}>
						<label>
							Email
							<input
								className={styles.formField}
								type='text'
								placeholder='Enter email'
								{...register('email')}
							/>
						</label>
						{emailError && <div className={styles.errorLabel}>{emailError}</div>}
					</div>


					<div className={styles.formFieldItem}>
						<label>
							Password
							<input
								className={styles.formField}
								type='text'
								placeholder='Enter email'
								{...register('password')}
							/>
						</label>
						{passwordlError && <div className={styles.errorLabel}>{passwordlError}</div>}
					</div>

					<div className={styles.formFieldItem}>
						<label>
							Password
							<input
								className={styles.formField}
								type='text'
								placeholder='Enter email'
								{...register('repeatPassword')}
							/>
						</label>
						{repeatPasswordError && <div className={styles.errorLabel}>{repeatPasswordError}</div>}
					</div>


					<button
						className={styles.formButton}
						type='submit'
					>
						Зарегистрироваться
					</button>

				</form>
			</div>
		</>
	)
}