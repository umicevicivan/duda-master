import { countries, Country as BaseCountry } from 'countries-list';

export interface Country extends BaseCountry {
  code: string;
}

export const CountryList: Country[] = Object.keys(countries).map((key) => ({
  code: key,
  ...countries[key as keyof typeof countries],
}));

export const findCountryByCode = (
  code: string | null | undefined
): Country | null => {
  if (!code?.trim()) {
    return null;
  }
  return (
    CountryList.find(
      (country: Country) => country.code === code?.toUpperCase()
    ) || null
  );
};
