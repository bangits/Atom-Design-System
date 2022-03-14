import { ExportIcon } from '@/icons';
import { Button, ButtonProps } from '@my-ui/core';
import { FC } from 'react';

export type ExportButtonProps = Omit<ButtonProps, 'startIcon' | 'variant'>;

export const ExportButton: FC<ExportButtonProps> = (props) => {
  return <Button {...props} startIcon={<ExportIcon width='15px' height='15px' />} variant='ghost' />;
};
