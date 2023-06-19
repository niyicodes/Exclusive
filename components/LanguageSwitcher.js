import React from 'react';

const LanguageSwitcher = () => {

  return (
    <select  className="bg-transparent border-2 px-2 py-1">
      <option value="en" className="text-black">English</option>
      <option value="fr" className="text-black">French</option>
    </select>
  );
};

export default LanguageSwitcher;
