import { ExportIcon } from '@/icons';
import { Tooltip } from '@my-ui/core';

export interface ExportButtonProps extends React.SVGProps<SVGSVGElement> {
  tooltipText?: string;
  disabled?: boolean;
}

export const ExportButton = ({ disabled, tooltipText, ...props }: ExportButtonProps) => {
  return (
    <Tooltip text={tooltipText}>
      <ExportIcon
        {...props}
        width='1.5rem'
        height='1.5rem'
        style={{ opacity: disabled ? 0.4 : 1, cursor: 'pointer' }}
        onClick={(...args) => {
          if (!disabled) props.onClick(...args);
        }}
      />
    </Tooltip>
  );
};
