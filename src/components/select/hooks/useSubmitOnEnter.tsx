import { useEffect } from 'react';
import { StyleOption } from 'src/constants/articleProps';

type UseSubmitOnEnterProps = {
	onClick: (value: StyleOption['value']) => void;
	value: StyleOption['value'];
	optionRef: React.RefObject<HTMLLIElement>;
};

export const useSubmitOnEnter = ({
									 onClick,
									 value,
									 optionRef,
								 }: UseSubmitOnEnterProps) => {
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
	}, [onClick, value, optionRef]);
};
