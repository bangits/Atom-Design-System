import { Icons } from '@/atom-design-system';
import { CurrencyGroup, LabelGroup } from '@/components';
import { Tooltip } from '@my-ui/core';
import { FC } from 'react';
import styles from './HeaderContent.module.scss';

export interface HeaderContentProps {
  title: string;
  links: {
    url: string;
    name: string;
    isLink?: boolean;
  }[];
}

const HeaderContent: FC<HeaderContentProps> = ({ links, title }) => {
  return (
    <div className={styles.HeaderContent}>
      <LabelGroup title={title} totalLabel={links.length.toString()}>
        <CurrencyGroup
          currencies={links.map((l, index) => ({
            title: l.name,
            value: index + 1,
            ...(l.isLink
              ? {
                  closeIcon: true,
                  endIcon: (
                    <Tooltip text={l.url}>
                      <Icons.LinkIcon onClick={() => window.open(l.url, '_blank')} />
                    </Tooltip>
                  )
                }
              : {})
          }))}
        />
      </LabelGroup>
    </div>
  );
};

export default HeaderContent;
