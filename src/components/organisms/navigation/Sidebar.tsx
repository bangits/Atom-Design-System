import { Sidebar as MyUISidebar, SidebarProps } from '@my-ui/core';
import SidebarBottom from './SidebarBottom';

export const Sidebar = (props: SidebarProps & { bottomLogoSrc?: string; bottomTitle?: string }) => {
  return (
    <>
      <MyUISidebar
        {...props}
        position='fixed'
        height='100vh'
        bottomContent={(isSidebarClosed) => (
          <SidebarBottom logoSrc={props.bottomLogoSrc} title={props.bottomTitle} isSidebarClosed={isSidebarClosed} />
        )}
      />
    </>
  );
};
