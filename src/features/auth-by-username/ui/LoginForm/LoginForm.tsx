import classNames from 'classnames';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAsyncReducer } from 'shared/lib/hooks';
import { AppButton } from 'shared/ui/AppButton';
import { AppInput } from 'shared/ui/AppInput';
import { AppText } from 'shared/ui/AppText';
import { getLoginState } from '../../model/selectors';
import { loginByUserName } from '../../model/services/loginByUserName';
import { loginActions, loginReducer } from '../../model/store';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
		onSuccess: () => void;
}

const LoginForm = ({ className, onSuccess }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	useAsyncReducer({ loginForm: loginReducer }, { removeAfterUnmount: true });

	const {
		password, username, isLoading, error,
	} = useSelector(getLoginState);

	const onInputUsername = useCallback((value) => {
		dispatch(loginActions.setUsername(value));
	}, [dispatch]);

	const onInputPassword = useCallback((value) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch]);

	const login = useCallback(async () => {
		const result = await dispatch(loginByUserName({ username, password }));
		if (result.meta.requestStatus === 'fulfilled') {
			onSuccess();
		}
	}, [dispatch, onSuccess, password, username]);

	return (
		<div className={classNames(cls.loginForm, className)}>
			<div className={classNames(cls.loginFormForms)}>
				<AppInput
					label="Логин"
					isFill
					value={username}
					autoFocus
					onInput={onInputUsername}
				/>
				<AppInput
					label="Пароль"
					type="password"
					isFill
					value={password}
					onInput={onInputPassword}
				/>
				{error && <AppText message={error} />}
			</div>
			<AppButton
				onClick={login}
				disabled={isLoading}
			>
				{t('Войти')}
			</AppButton>
		</div>
	);
};

export default LoginForm;
