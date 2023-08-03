import { DividerList, Typography, typedMemo } from '@/atom-design-system';
import { FC, ReactNode } from 'react';

export interface ItemsListTopProps {
  selectedLabel?: {
    normalPart?: ReactNode;
    styledPart?: ReactNode;
  };

  foundLabel?: {
    normalPart?: ReactNode;
    styledPart?: ReactNode;
  };

  contentBeforeSelectedLabel?: ReactNode;
  contentAfterSelectedLabel?: ReactNode;
}

const ItemsListTop: FC<ItemsListTopProps> = ({
  selectedLabel,
  foundLabel,
  contentAfterSelectedLabel,
  contentBeforeSelectedLabel
}) => {
  return (
    <div className='d-flex justify-content-space-between align-items-center form-color'>
      <DividerList>
        {contentBeforeSelectedLabel}

        {selectedLabel && (
          <Typography variant='p3' component='span'>
            {selectedLabel.normalPart}

            {selectedLabel.styledPart && (
              <Typography variant='p3' component='span' italic fontWeight={500}>
                {selectedLabel.styledPart}
              </Typography>
            )}
          </Typography>
        )}

        {contentAfterSelectedLabel}
      </DividerList>

      {foundLabel && (
        <Typography variant='p4' component='span'>
          {foundLabel.normalPart}

          {foundLabel.styledPart && (
            <Typography color='primary' variant='p3' component='span' fontWeight={500}>
              {foundLabel.styledPart}
            </Typography>
          )}
        </Typography>
      )}
    </div>
  );
};

export default typedMemo(ItemsListTop);
