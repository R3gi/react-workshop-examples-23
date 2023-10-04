import { Dispatch, SetStateAction, createContext } from 'react';

const LocaleContext = createContext<{
  locale: string;
  toggleLocale: Dispatch<SetStateAction<string>>;
}>({
  locale: '',
  toggleLocale: () => {},
});

export const LocaleContextX = createContext<{
  locale: string;
  baseAppUrl: string;
}>({
  locale: '',
  baseAppUrl: '',
});

export default LocaleContext;
