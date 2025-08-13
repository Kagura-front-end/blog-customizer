import { useRef } from 'react';
import { StyleOption } from 'src/constants/articleProps';
import { Text } from 'components/text';
import { useEnterSubmit } from './hooks/useEnterSubmit';

import styles from './RadioGroup.module.scss';

type OptionProps = {
	value: StyleOption['value'];
	title: StyleOption['title'];
	selected: StyleOption;
	groupName: string;
	onChange?: (option: StyleOption) => void;
	option: StyleOption;
};

export const Option = ({
	value,
	title,
	selected,
	groupName,
	onChange,
	option,
}: OptionProps) => {
	const optionRef = useRef<HTMLDivElement>(null);

	useEnterSubmit({ onChange, option });

	const handleChange = () => onChange?.(option);

	const inputId = `${groupName}_radio_item_with_value__${value}`;
	const isChecked = value === selected.value;

	return (
		<div
			className={styles.item}
			data-checked={isChecked}
			data-testid={inputId}
			tabIndex={0}
			ref={optionRef}>
			<input
				className={styles.input}
				type='radio'
				name={groupName}
				id={inputId}
				value={value}
				onChange={handleChange}
				tabIndex={-1}
			/>
			<label className={styles.label} htmlFor={inputId}>
				<Text size={18} uppercase>
					{title}
				</Text>
			</label>
		</div>
	);
};
