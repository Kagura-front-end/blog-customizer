import {useEffect, useRef} from 'react';
import {StyleOption} from 'src/constants/articleProps';

type UseEnterSubmitProps = {
	onChange?: (option: StyleOption) => void;
	option: StyleOption;
};

export const useEnterSubmit = ({onChange, option}: UseEnterSubmitProps) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (document.activeElement === element && event.key === 'Enter') {
				onChange?.(option);
			}
		};

		element.addEventListener('keydown', handleKeyDown);
		return () => {
			element.removeEventListener('keydown', handleKeyDown);
		};
	}, [onChange, option]);

	return ref;
};