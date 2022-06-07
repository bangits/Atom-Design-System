import React, { FC } from 'react';
import { DocumentCard } from '../document-card';
import styles from './DocumentCards.module.scss';

export interface DocumentCardsProps {
  noDataText: string;
  documents: any;
  title: string;
  menuItems: any;
}

const DocumentCards: FC<DocumentCardsProps> = ({ documents, title, menuItems }) => {
  return (
    <div className={styles['DocumentCards']}>
      <div className={styles['DocumentCards--title']}>{title}</div>
      <div
        style={{
          marginRight: '35px',
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
        {documents.map((document) => (
          <>
            <DocumentCard
              id={document.id}
              noDataText={document.noDataText}
              createdDate={{
                label: document.createdDate.label,
                value: document.createdDate.value || document.noDataText
              }}
              verifiedDate={{
                label: document.verifiedDate.label,
                value: document.verifiedDate.value || document.noDataText
              }}
              col={4}
              title={document.title}
              logo={document.logo}
              icon={document.icon}
              variant={document.variant}
              statusLabel={document.statusLabel}
              pageLabel={document.pageLabel}
              pageQuantity={document.pageQuantity}
              menuItems={menuItems}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default DocumentCards;
