import { ListViewMoreProps } from '@/components';
import { FC, createContext } from 'react';

export interface IMainContext {
  viewLessLabel: string;

  getViewMoreLabel: ListViewMoreProps['getMoreLabel'];
}

export const MainContext = createContext<IMainContext>(null);

export const MainContextProvider: FC<IMainContext> = ({ children, ...props }) => {
  return <MainContext.Provider value={props}>{children}</MainContext.Provider>;
};
