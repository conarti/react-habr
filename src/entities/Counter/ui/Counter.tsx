/* eslint-disable i18next/no-literal-string */
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { AppButton } from 'shared/ui/AppButton';
import { AppButtonSize } from 'shared/ui/AppButton/AppButton';
import { counterActions } from '../model';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import cls from './Counter.module.scss';

interface CounterProps {
	className?: string;
}

export const Counter = ({ className }: CounterProps) => {
	const dispatch = useAppDispatch();
	const value = useSelector(getCounterValue);

	const increment = () => {
		dispatch(counterActions.increment());
	};

	const decrement = () => {
		dispatch(counterActions.decrement());
	};
	return (
		<div className={classNames(cls.counter, className)}>
			<h2 data-testid="value-title">
				Counter value -&nbsp;
				{value}
			</h2>
			<div className={classNames(cls.counterBtnGroup)}>
				<AppButton
					size={AppButtonSize.SM}
					onClick={increment}
					data-testid="increment-btn"
				>
					Increment
				</AppButton>
				<AppButton
					size={AppButtonSize.SM}
					onClick={decrement}
					data-testid="decrement-btn"
				>
					Decrement
				</AppButton>
			</div>
		</div>
	);
};
