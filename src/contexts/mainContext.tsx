import { FC, createContext } from 'react';

export interface IMainContext {
  viewLessLabel: string;

  getViewMoreLabel(count: number): string;
}

export const MainContext = createContext<IMainContext>(null);

export const MainContextProvider: FC<IMainContext> = ({ children, ...props }) => {
  return <MainContext.Provider value={props}>{children}</MainContext.Provider>;
};
