import { Header as MyUIHeader } from '@my-ui/core';

export const Header: typeof MyUIHeader = (props) => {
  return (
    <>
      <MyUIHeader
        {...props}
        // notificationProps={{
        //   ...props.notificationProps,
        //   children: <Icons.NotificationIcon />
        // }}
      />
    </>
  );
};
