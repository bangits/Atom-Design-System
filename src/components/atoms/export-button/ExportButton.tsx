import { Button, ButtonProps } from '@my-ui/core';
import React from 'react';

export type ExportButtonProps = Omit<ButtonProps, 'startIcon' | 'variant'>;

export const ExportButton = (props: ExportButtonProps) => {
  return <Button {...props} startIcon={<div>Export</div>} variant='ghost' />;
};
