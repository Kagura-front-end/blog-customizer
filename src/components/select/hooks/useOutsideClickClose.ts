import { useEffect } from 'react';

type UseOutsideClickClose = {
	isOpen: boolean;
	rootRef: React.RefObject<HTMLElement>;
	onChange: (newValue: boolean) => void;
	onClose?: () => void;
	eventType?: keyof DocumentEventMap;
};

export const useOutsideClickClose = ({
										 isOpen,
										 rootRef,
										 onChange,
										 onClose,
										 eventType = 'mousedown',
									 }: UseOutsideClickClose) => {
	useEffect(() => {
		const handleEvent = (event: Event) => {
			const target = event.target;
			if (
				target instanceof Node &&
				rootRef.current &&
				!rootRef.current.contains(target)
			) {
				if (isOpen) {
					onClose?.();
					onChange(false);
				}
			}
		};

		document.addEventListener(eventType, handleEvent);

		return () => {
			document.removeEventListener(eventType, handleEvent);
		};
	}, [isOpen, onChange, onClose, rootRef, eventType]);
};
