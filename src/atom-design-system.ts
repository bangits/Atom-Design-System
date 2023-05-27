import { Icons as MyUIIcons } from '@my-ui/core';
import { addResizeChangeEvent } from './helpers';
import * as DesignSystemIcons from './icons';
import './sass/main.scss';

export const Icons = { ...MyUIIcons, ...DesignSystemIcons };

export {
  AcceptionDialog,
  Breadcrumb,
  Button,
  Checkbox,
  Collapse,
  Dialog,
  DialogActions,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogProvider,
  DialogTypes,
  DialogWithActions,
  IconButton,
  Loader,
  Pagination,
  RadioButton,
  Scroll,
  Tag,
  Tooltip,
  Typography,
  typedMemo,
  type RadioButtonProps
} from '@my-ui/core';
export type {
  AcceptionDialogProps,
  ButtonProps,
  DialogBodyProps,
  DialogConfig,
  DialogFooterProps,
  DialogHeaderProps,
  DialogProps,
  DialogWithActionsProps
} from '@my-ui/core';
export * from './components';
export * from './helpers/arrayMove';
export * from './services';

try {
  if (process.env.STORYBOOK !== 'true') throw new Error('');
} catch (error) {
  addResizeChangeEvent();
}
