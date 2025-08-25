import {Select} from 'src/ui/select';
import type {ComponentProps} from 'react';

export type StyleSelectProps = ComponentProps<typeof Select>;

export const StyleSelect = (props: StyleSelectProps) => {
	return <Select {...props} />;
};
