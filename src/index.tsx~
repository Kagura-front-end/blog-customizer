import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useEffect, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { StyleOption, defaultArticleState } from './constants/articleProps';
import { loadParams, saveParams } from './lib/storage';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
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

	const [selectedStyles, setSelectedStyles] = useState({
		fontFamily: parsed?.fontSelectState?.value || defaultArticleState.fontFamilyOption.value,
		fontSize: parsed?.fontSizeSelectState?.value || defaultArticleState.fontSizeOption.value,
		fontColor: parsed?.fontColorSelectState?.value || defaultArticleState.fontColor.value,
		backgroundColor: parsed?.backgroundColorSelectState?.value || defaultArticleState.backgroundColor.value,
		contentWidth: parsed?.contentWidthSelectState?.value || defaultArticleState.contentWidth.value,
	});

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
		contentWidthSelectState,
	]);

	const setDefaultToAllSelections = () => {
		setFontSelectState(defaultArticleState.fontFamilyOption);
		setFontSizeSelectState(defaultArticleState.fontSizeOption);
		setFontColorSelectState(defaultArticleState.fontColor);
		setBackgroundColorSelectState(defaultArticleState.backgroundColor);
		setContentWidthSelectState(defaultArticleState.contentWidth);

		setSelectedStyles({
			fontFamily: defaultArticleState.fontFamilyOption.value,
			fontSize: defaultArticleState.fontSizeOption.value,
			fontColor: defaultArticleState.fontColor.value,
			backgroundColor: defaultArticleState.backgroundColor.value,
			contentWidth: defaultArticleState.contentWidth.value,
		});
	};

	const handleFormSubmit = () => {
		setSelectedStyles({
			fontFamily: fontSelectState.value,
			fontSize: fontSizeSelectState.value,
			fontColor: fontColorSelectState.value,
			backgroundColor: backgroundColorSelectState.value,
			contentWidth: contentWidthSelectState.value,
		});
	};

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
			}
		>
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

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
