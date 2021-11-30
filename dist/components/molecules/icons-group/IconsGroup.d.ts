import { FC, ReactNode } from 'react';
export interface IconsGroupProps {
    icons: {
        icon: ReactNode;
        isActive?: Boolean;
    }[];
}
declare const IconsGroup: FC<IconsGroupProps>;
export default IconsGroup;
