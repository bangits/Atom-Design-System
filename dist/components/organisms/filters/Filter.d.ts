import { FilterValueType } from '../..';
import { FC } from 'react';
import { FilterProp } from './FilterTypes';
export interface FilterProps {
    filter: FilterProp;
    value: FilterValueType;
    onFilterChange: (filterName: string, value: FilterValueType) => void;
}
declare const _default: FC<FilterProps>;
export default _default;
