import classNames from 'classnames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAsyncReducer } from 'shared/lib/hooks';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton';
import { AppInput } from 'shared/ui/AppInput';
import { addCommentActions, addCommentReducer } from '../../model/store';
import { getAddCommentError, getAddCommentText } from '../../model/selectors';
import styles from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
	const {
		className,
		onSendComment,
	} = props;
	const { t } = useTranslation('comments');
	const text = useSelector(getAddCommentText);
	const error = useSelector(getAddCommentError);
	const dispatch = useAppDispatch();

	useAsyncReducer({ addComment: addCommentReducer }, { removeAfterUnmount: true });

	const setCommentText = useCallback((value: string) => {
		dispatch(addCommentActions.setText(value));
	}, [dispatch]);

	const onSendHandler = useCallback((ev) => {
		ev.preventDefault();
		onSendComment(text);
		setCommentText('');
	}, [setCommentText, onSendComment, text]);

	return (
		<form className={classNames(styles.addCommentForm, className)}>
			{error && <span>{error}</span>}
			<AppInput
				className="mr-md"
				placeholder={t('Введите текст комментария...')}
				isFill
				value={text}
				onInput={setCommentText}
			/>
			<AppButton
				theme={AppButtonTheme.PRIMARY}
				onClick={onSendHandler}
				type="submit"
			>
				{t('Отправить')}
			</AppButton>
		</form>
	);
});

export default AddCommentForm;
