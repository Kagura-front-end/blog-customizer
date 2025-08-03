import { FC } from 'react';
import cn from 'classnames';
import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';

export type OnClick = () => void;

interface ArrowButtonProps {
	onClick?: OnClick;
	isOpen?: boolean;
}

export const ArrowButton: FC<ArrowButtonProps> = ({ onClick, isOpen }) => (
	<div
		role="button"
		aria-label="Открыть / закрыть настройки статьи"
		tabIndex={0}
		className={cn(styles.container, {
			[styles.container_open]: isOpen,
		})}
		onClick={onClick}
	>
		<img
			src={arrow}
			alt="Иконка стрелочки"
			className={cn(styles.arrow, {
				[styles.arrow_open]: isOpen,
			})}
		/>
	</div>
);
