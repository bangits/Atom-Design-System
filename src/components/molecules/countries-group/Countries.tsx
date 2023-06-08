import { TagCountry, TagCountryProps } from '@my-ui/core';
import { FC } from 'react';
import { ListViewMore } from '../list-view-more';

export interface CountriesProps {
  tagCountries?: TagCountryProps[];
  isCmsUser?: boolean;
}

const Countries: FC<CountriesProps> = ({ tagCountries, isCmsUser = false }) => {
  return (
    <ListViewMore>
      {tagCountries?.map((tagCountry, idx) => (
        <TagCountry key={idx} imgSrc={tagCountry.imgSrc} tagName={tagCountry.tagName} />
      ))}
    </ListViewMore>
  );
};

export default Countries;
