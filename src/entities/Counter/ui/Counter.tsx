/* eslint-disable i18next/no-literal-string */
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppButton } from 'shared/ui/AppButton';
import { AppButtonSize } from 'shared/ui/AppButton/ui/AppButton';
import { counterActions } from '../model';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import cls from './Counter.module.scss';

interface CounterProps {
	className?: string;
}

export const Counter = ({ className }: CounterProps) => {
	const dispatch = useDispatch();
	const value = useSelector(getCounterValue);

	const increment = () => {
		dispatch(counterActions.increment());
	};

	const decrement = () => {
		dispatch(counterActions.decrement());
	};
	return (
		<div className={classNames(cls.counter, className)}>
			<h2>
				Counter value -&nbsp;
				{value}
			</h2>
			<div className={classNames(cls.counterBtnGroup)}>
				<AppButton
					size={AppButtonSize.SM}
					onClick={increment}
				>
					Increment
				</AppButton>
				<AppButton
					size={AppButtonSize.SM}
					onClick={decrement}
				>
					Decrement
				</AppButton>
			</div>
		</div>
	);
};
