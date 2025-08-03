import { useState, useEffect, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from 'components/article/Article';
import { ArticleParamsForm } from 'components/article-params-form/ArticleParamsForm';
import { StyleOption, defaultArticleState } from '../../constants/articleProps';
import { loadParams, saveParams } from '../../lib/storage';

import styles from './App.module.scss';

export const App = () => {
	const parsed = loadParams();

	const [fontSelectState, setFontSelectState] = useState<StyleOption>(
		parsed?.fontSelectState || defaultArticleState.fontFamilyOption
	);
	const [fontSizeSelectState, setFontSizeSelectState] = useState<StyleOption>(
		parsed?.fontSizeSelectState || defaultArticleState.fontSizeOption
	);
	const [fontColorSelectState, setFontColorSelectState] = useState<StyleOption>(
		parsed?.fontColorSelectState || defaultArticleState.fontColor
	);
	const [backgroundColorSelectState, setBackgroundColorSelectState] = useState<StyleOption>(
		parsed?.backgroundColorSelectState || defaultArticleState.backgroundColor
	);
	const [contentWidthSelectState, setContentWidthSelectState] = useState<StyleOption>(
		parsed?.contentWidthSelectState || defaultArticleState.contentWidth
	);

	const setDefaultToAllSelections = () => {
		setFontSelectState(defaultArticleState.fontFamilyOption);
		setFontSizeSelectState(defaultArticleState.fontSizeOption);
		setFontColorSelectState(defaultArticleState.fontColor);
		setBackgroundColorSelectState(defaultArticleState.backgroundColor);
		setContentWidthSelectState(defaultArticleState.contentWidth);
	};

	const [selectedStyles, setSelectedStyles] = useState({
		fontFamily: fontSelectState.value,
		fontSize: fontSizeSelectState.value,
		fontColor: fontColorSelectState.value,
		backgroundColor: backgroundColorSelectState.value,
		contentWidth: contentWidthSelectState.value,
	});

	const handleFormSubmit = () => {
		setSelectedStyles({
			fontFamily: fontSelectState.value,
			fontSize: fontSizeSelectState.value,
			fontColor: fontColorSelectState.value,
			backgroundColor: backgroundColorSelectState.value,
			contentWidth: contentWidthSelectState.value,
		});
	};

	useEffect(() => {
		saveParams({
			fontSelectState,
			fontSizeSelectState,
			fontColorSelectState,
			backgroundColorSelectState,
			contentWidthSelectState,
		});
	}, [
		fontSelectState,
		fontSizeSelectState,
		fontColorSelectState,
		backgroundColorSelectState,
		contentWidthSelectState
	]);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': selectedStyles.fontFamily,
					'--font-size': selectedStyles.fontSize,
					'--font-color': selectedStyles.fontColor,
					'--container-width': selectedStyles.contentWidth,
					'--bg-color': selectedStyles.backgroundColor,
				} as CSSProperties
			}>
			<ArticleParamsForm
				fontSelectState={fontSelectState}
				setFontSelectState={setFontSelectState}
				fontSizeSelectState={fontSizeSelectState}
				setFontSizeSelectState={setFontSizeSelectState}
				fontColorSelectState={fontColorSelectState}
				setFontColorSelectState={setFontColorSelectState}
				backgroundColorSelectState={backgroundColorSelectState}
				setBackgroundColorSelectState={setBackgroundColorSelectState}
				contentWidthSelectState={contentWidthSelectState}
				setContentWidthSelectState={setContentWidthSelectState}
				onResetClick={setDefaultToAllSelections}
				onSubmitClick={handleFormSubmit}
			/>
			<Article />
		</div>
	);
};