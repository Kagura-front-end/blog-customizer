import { useEffect, useRef } from 'react';
import type { MouseEventHandler } from 'react';
import clsx from 'clsx';
import { StyleOption } from 'src/constants/articleProps';
import { Text } from 'components/text';
import { isFontFamilyClass } from './helpers/isFontFamilyClass';

import styles from './Select.module.scss';

type DropdownOptionProps = {
	option: StyleOption;
	onClick: (value: StyleOption['value']) => void;
};

export const DropdownOption = ({ option, onClick }: DropdownOptionProps) => {
	const { value, title, optionClassName, className } = option;
	const optionRef = useRef<HTMLLIElement>(null);

	const handleClick: MouseEventHandler<HTMLLIElement> = () => {
		onClick(value);
	};

	useEffect(() => {
		const element = optionRef.current;
		if (!element) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (document.activeElement === element && event.key === 'Enter') {
				onClick(value);
			}
		};

		element.addEventListener('keydown', handleKeyDown);
		return () => {
			element.removeEventListener('keydown', handleKeyDown);
		};
	}, [onClick, value]);

	return (
		<li
			className={clsx(styles.option, styles[optionClassName || ''])}
			value={value}
			onClick={handleClick}
			tabIndex={0}
			data-testid={`select-option-${value}`}
			ref={optionRef}
		>
			<Text family={isFontFamilyClass(className) ? className : undefined}>
				{title}
			</Text>
		</li>
	);
};
