/// <reference types="react" />
import { FiltersProps } from './FilterTypes';
export declare function Filters<T>({ filters, checkboxFilters, clearLabel, applyLabel, resultLabel, defaultOpened, initialValues, onSubmit, onClear, className }: FiltersProps<T>): JSX.Element;
export declare namespace Filters {
    var defaultProps: {
        checkboxFilters: any[];
    };
}
declare const _default: typeof Filters;
export default _default;
