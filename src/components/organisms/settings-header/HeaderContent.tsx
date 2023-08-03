import { LabelGroup, LabelManagerTagLite } from '@/components';
import { FC, useCallback } from 'react';
import styles from './HeaderContent.module.scss';
import { Tag, Tooltip } from '@my-ui/core';
import { Icons } from '@/atom-design-system';
import { PrimaryKey } from '@atom/common';

export interface HeaderContentProps {
  title: string;

  links: {
    url: string;
    name: string;
    isLink?: boolean;
    label?: {
      id: PrimaryKey;
      name: string;
      isActive: boolean;
    };
  }[];
}

const generateTag = (link, index) => {
  const label = link.label;

  return (
    <div key={index} className={styles.Tag}>
      <Tag
        inactive
        value={index + 1}
        title={link.name}
        {...(link.isLink || label
          ? {
              closeIcon: true,
              endIcon: [
                ...(link.isLink
                  ? [
                      <Tooltip text={link.url}>
                        <Icons.LinkIcon onClick={() => window.open(link.url, '_blank')} />
                      </Tooltip>
                    ]
                  : []),
                ...(label ? [<LabelManagerTagLite isActive={label.isActive} tooltipText={label.name} />] : [])
              ]
            }
          : {})}
      />
    </div>
  );
};

const HeaderContent: FC<HeaderContentProps> = ({ links, title }) => {
  return (
    <div className={styles.HeaderContent}>
      <LabelGroup title={title} totalLabel={links.length.toString()}>
        <div className={styles.TagsWrapper}>{links.map((l, i) => generateTag(l, i))}</div>
      </LabelGroup>
    </div>
  );
};

export default HeaderContent;
