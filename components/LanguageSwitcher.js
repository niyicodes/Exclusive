import React from 'react';
import { useTranslation } from 'next-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select onChange={changeLanguage} value={i18n.language} className="bg-transparent border-2 px-2 py-1">
      <option value="en" className="text-black">English</option>
      <option value="fr" className="text-black">French</option>
    </select>
  );
};

export default LanguageSwitcher;
