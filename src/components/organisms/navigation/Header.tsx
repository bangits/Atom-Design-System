import { Header as MyUIHeader, Icons } from '@my-ui/core';
import { HeaderProps } from '@my-ui/core/dist/components/navigation/header/Header';

export const Header = (props: HeaderProps) => {
  return (
    <>
      <MyUIHeader
        {...props}
        notificationProps={{
          ...props.notificationProps,
          icon: <Icons.NotificationIcon />
        }}
      />
    </>
  );
};
