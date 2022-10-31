import classNames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton';
import { AppInput } from 'shared/ui/AppInput';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const [formState, setFormState] = useState({ login: '', password: '' });

	return (
		<div className={classNames(cls.loginForm, className)}>
			<div className={classNames(cls.loginFormForms)}>
				<AppInput
					label="Логин"
					isFill
					value={formState.login}
					autoFocus
					onInput={(value) => setFormState({ ...formState, login: value })}
				/>
				<AppInput
					label="Пароль"
					type="password"
					isFill
					value={formState.password}
					onInput={(value) => setFormState({ ...formState, password: value })}
				/>
			</div>
			<AppButton>
				{t('Войти')}
			</AppButton>
		</div>
	);
};
