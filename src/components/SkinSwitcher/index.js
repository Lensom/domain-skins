import React, { useEffect, useContext } from 'react';
import ThemeContext from '../../context';

const SkinSwitcher = () => {
  const { setStyles, selectedSkin } = useContext(ThemeContext);

  useEffect(() => {
    if (selectedSkin) {
      // Dynamic request or import
      import(`../../skins/${selectedSkin}/common.module.scss`)
        .then((module) => setStyles(module))
        .catch((error) => console.error('Error loading styles:', error));
    }
  }, [selectedSkin]);

  // Or we can init loader there
  return selectedSkin === null ? <div>Loading...</div> : null;
};

export default SkinSwitcher;
