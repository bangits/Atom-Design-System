import React, { FC } from 'react';
import { DocumentCard } from '../document-card';

export interface DocumentCardsProps {
  noDataText: string;
  documents: any;
  onArrowClick: () => void;
}

const DocumentCards: FC<DocumentCardsProps> = ({ documents }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'space-around' }}>
      {documents.map((document) => (
        <>
          <DocumentCard
            noDataText={document.noDataText}
            documentId={{
              label: document.document.label,
              value: document.document.value
            }}
            verifiedDate={{
              label: document.verifiedDate.label,
              value: document.verifiedDate.value
            }}
            col={4}
            title={document.title}
            logo={document.logo}
            onArrowClick={() => {}}
            icon={document.icon}
            variant={document.variant}
            statusLabel={document.statusLabel}
            menuItems={document.menuItems}
          />
        </>
      ))}
    </div>
  );
};

export default DocumentCards;
