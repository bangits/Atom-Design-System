import { LabelGroup } from '@/components';
import { FC, ReactNode } from 'react';
import styles from './HeaderContent.module.scss';
import { Tag, Tooltip } from '@my-ui/core';
import { Icons } from '@/atom-design-system';
import { PrimaryKey } from '@atom/common';

export interface HeaderContentProps {
  title: string;
  labelComponent?: FC<{ isActive: boolean; tooltipText: string }>;
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

const generateTag = (link, index, labelManagerTagLite: ReactNode) => {
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
                ...(label ? [labelManagerTagLite] : [])
              ]
            }
          : {})}
      />
    </div>
  );
};

const HeaderContent: FC<HeaderContentProps> = ({ links, title, labelComponent: LabelComponent }) => {
  return (
    <div className={styles.HeaderContent}>
      <LabelGroup title={title} totalLabel={links.length.toString()}>
        <div className={styles.TagsWrapper}>
          {links.map((l, i) =>
            generateTag(l, i, <LabelComponent isActive={l?.label.isActive} tooltipText={l?.label.name} />)
          )}
        </div>
      </LabelGroup>
    </div>
  );
};

export default HeaderContent;
