import { StyleOption } from '../constants/articleProps';

export type StoredParams = {
	fontSelectState: StyleOption;
	fontSizeSelectState: StyleOption;
	fontColorSelectState: StyleOption;
	backgroundColorSelectState: StyleOption;
	contentWidthSelectState: StyleOption;
};

const STORAGE_KEY = 'articleParams';

export const loadParams = (): StoredParams | null => {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
};

export const saveParams = (params: StoredParams) => {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(params));
	} catch (error) {
		console.error('Failed to save params to localStorage:', error);
	}
};
