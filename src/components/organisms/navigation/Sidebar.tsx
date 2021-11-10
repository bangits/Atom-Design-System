import { Sidebar as MyUISidebar, SidebarProps } from '@my-ui/core';

export const Sidebar = (props: SidebarProps) => {
  return (
    <>
      <MyUISidebar {...props} position='fixed' height='100vh' />
    </>
  );
};
