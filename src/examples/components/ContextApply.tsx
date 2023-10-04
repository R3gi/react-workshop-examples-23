import React, { useContext, useMemo, useState } from 'react';
import LocaleContext, { LocaleContextX } from '../contexts/LocaleContext';

const LocaleTogglerButton = () => {
  const { locale, toggleLocale } = useContext(LocaleContext);

  return (
    <div>
      <button type="button" onClick={() => toggleLocale(locale === 'en' ? 'cs' : 'en')}>
        Toggle Locale from {locale}
      </button>
    </div>
  );
};

const Text = () => {
  const { locale } = useContext(LocaleContext);

  return <h2>{locale}</h2>;
};

export const ContextApply = () => {
  const [locale, toggleLocale] = useState('cs');
  const value = useMemo(() => ({ locale, toggleLocale }), [locale]);
  // const value = useMemo(() => ({ baseAppUrl: 'http://localhost:3000', locale: 'cs' }), []);

  return (
    <LocaleContext.Provider value={value}>
      <LocaleTogglerButton />
      <Text />
    </LocaleContext.Provider>
  );
};
