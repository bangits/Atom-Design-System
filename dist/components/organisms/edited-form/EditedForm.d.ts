import React, { ReactNode } from 'react';
export interface EditedFormProps {
    options: {
        title: string;
        value: string | number;
    }[];
    editButton: ReactNode;
    title?: string;
}
declare const _default: React.FC<EditedFormProps>;
export default _default;
