import { Button, Card, Tab } from '@my-ui/core';
import React, { ReactNode } from 'react';
import styles from './Translation.module.scss';

export interface TranslationProps {
  collections: {
    id: number;
    name: string;
  }[];
  translations: {
    cancel: string;
    save: string;
  };

  translationLeftContent?: ReactNode;
  translationRightContent?: ReactNode;

  onSaveButtonClick?(): void;
  onCancelButtonClick?(): void;
  onCollectionChange(collectionId: number): void;
}

const Translation = ({
  translations,
  collections,
  translationLeftContent,
  translationRightContent,
  onCollectionChange,
  onCancelButtonClick,
  onSaveButtonClick
}: TranslationProps) => {
  return (
    <Card className={styles.TranslationCard}>
      <div className={styles.TranslationActions}>
        <Button variant='ghost' onClick={onCancelButtonClick}>
          {translations.cancel}
        </Button>
        <Button onClick={onSaveButtonClick}>{translations.save}</Button>
      </div>

      <div className={styles.Collections}>
        <Tab
          options={collections.map((c) => ({
            title: c.name,
            value: c.id
          }))}
          defaultValue={1}
          variant='bordered'
          onChange={onCollectionChange}
        />
      </div>

      <div className={styles.TranslationContents}>
        {translationLeftContent && <Card className={styles.TranslationLeftContent}>{translationLeftContent}</Card>}
        <Card className={styles.TranslationRightContent}>{translationRightContent}</Card>
      </div>
    </Card>
  );
};

export default Translation;
