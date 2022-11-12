import { Icons as MyUIIcons } from '@my-ui/core';
import { addResizeChangeEvent } from './helpers';
import * as DesignSystemIcons from './icons';
import './sass/main.scss';

export const Icons = { ...MyUIIcons, ...DesignSystemIcons };

export {
  AcceptionDialog,
  AcceptionDialogProps,
  Breadcrumb,
  Button,
  ButtonProps,
  Checkbox,
  Collapse,
  Dialog,
  DialogActions,
  DialogBody,
  DialogBodyProps,
  DialogConfig,
  DialogFooter,
  DialogFooterProps,
  DialogHeader,
  DialogHeaderProps,
  DialogProps,
  DialogProvider,
  DialogTypes,
  DialogWithActions,
  DialogWithActionsProps,
  IconButton,
  Loader,
  Pagination,
  Tooltip,
  typedMemo
} from '@my-ui/core';
export * from './components';
export * from './helpers/arrayMove';
export * from './services';

try {
  if (process.env.STORYBOOK !== 'true') throw new Error('');
} catch (error) {
  addResizeChangeEvent();
}
