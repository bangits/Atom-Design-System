import React, { FC } from 'react';
import styles from './Countries.module.scss';
import { TagCountry, TagCountryProps } from '@my-ui/core';

export interface CountriesProps {
  tagCountries?: TagCountryProps[];
}

const Countries: FC<CountriesProps> = ({ tagCountries }) => {
  return (
    <div className={styles.CountriesWrapper}>
      {tagCountries?.map((tagCountry, idx) => (
        <TagCountry key={idx} imgSrc={tagCountry.imgSrc} tagName={tagCountry.tagName} />
      ))}
    </div>
  );
};

export default Countries;
