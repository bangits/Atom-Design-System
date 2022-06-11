import { TagCountry, TagCountryProps } from '@my-ui/core';
import React, { FC } from 'react';
import styles from './Countries.module.scss';

export interface CountriesProps {
  tagCountries?: TagCountryProps[];
  isCmsUser?: boolean;
}

const Countries: FC<CountriesProps> = ({ tagCountries, isCmsUser = false }) => {
  return (
    <div className={styles.CountriesWrapper}>
      {tagCountries?.map((tagCountry, idx) => (
        <TagCountry key={idx} imgSrc={tagCountry.imgSrc} tagName={tagCountry.tagName} />
      ))}
    </div>
  );
};

export default Countries;
