import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react';
import cn from 'classnames';

import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Separator } from '../separator/Separator';
import { StyleSelect } from '../select/StyleSelect';
import { RadioGroup } from '../radio-group/RadioGroup';

import {
	StyleOption,
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
	fontSelectState: StyleOption;
	setFontSelectState: Dispatch<SetStateAction<StyleOption>>;

	fontSizeSelectState: StyleOption;
	setFontSizeSelectState: Dispatch<SetStateAction<StyleOption>>;

	fontColorSelectState: StyleOption;
	setFontColorSelectState: Dispatch<SetStateAction<StyleOption>>;

	backgroundColorSelectState: StyleOption;
	setBackgroundColorSelectState: Dispatch<SetStateAction<StyleOption>>;

	contentWidthSelectState: StyleOption;
	setContentWidthSelectState: Dispatch<SetStateAction<StyleOption>>;

	onResetClick: () => void;
	onSubmitClick: () => void;
};

export const ArticleParamsForm = ({
									  fontSelectState,
									  setFontSelectState,
									  fontSizeSelectState,
									  setFontSizeSelectState,
									  fontColorSelectState,
									  setFontColorSelectState,
									  backgroundColorSelectState,
									  setBackgroundColorSelectState,
									  contentWidthSelectState,
									  setContentWidthSelectState,
									  onResetClick,
									  onSubmitClick,
								  }: ArticleParamsFormProps) => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const asideRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (asideRef.current && !asideRef.current.contains(event.target as Node)) {
				setIsFormOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmitClick();
	};

	const toggleForm = () => setIsFormOpen((prev) => !prev);
	const container = isFormOpen ? styles.container_open : styles.container;

	return (
		<>
			<ArrowButton onClick={toggleForm} isOpen={isFormOpen} />
			<aside className={cn(styles.container, container)} ref={asideRef}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<StyleSelect
						selected={fontSelectState}
						options={fontFamilyOptions}
						onChange={setFontSelectState}
						title="Шрифт"
					/>

					<RadioGroup
						name="radioFonts"
						options={fontSizeOptions}
						selected={fontSizeSelectState}
						title="размер шрифта"
						onChange={setFontSizeSelectState}
					/>

					<StyleSelect
						selected={fontColorSelectState}
						options={fontColors}
						onChange={setFontColorSelectState}
						title="цвет шрифта"
					/>

					<Separator />

					<StyleSelect
						selected={backgroundColorSelectState}
						options={backgroundColors}
						onChange={setBackgroundColorSelectState}
						title="цвет фона"
					/>

					<StyleSelect
						selected={contentWidthSelectState}
						options={contentWidthArr}
						onChange={setContentWidthSelectState}
						title="ширина контента"
					/>

					<div className={styles.bottomContainer}>
						<Button title="Сбросить" type="reset" onClick={onResetClick} />
						<Button title="Применить" type="submit" />
					</div>
				</form>
			</aside>
		</>
	);
};
