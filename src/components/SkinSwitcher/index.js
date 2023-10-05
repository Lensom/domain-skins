import React, { useEffect, useState } from 'react';
import useSkinSelector from '../../hooks/useSkinSelector';
import Header from '../Header';
import Footer from '../Footer';

function SkinSwitcher() {
  const selectedSkin = useSkinSelector();
  const [styles, setStyles] = useState({});

  console.log(selectedSkin, 'selectedSkin');

  useEffect(() => {
    if (selectedSkin) {
      // dynamic import or request
      import(`../../skins/${selectedSkin}/common.module.scss`)
        .then((module) => setStyles(module))
        .catch((error) => console.error('Error loading footer styles:', error));
    }
  }, [selectedSkin]);

  if (selectedSkin === null || styles === null) {
    // Loader or Spinner
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header className={styles.default.header} />
      <main>Selected skin: {selectedSkin}</main>
      <Footer className={styles.default.footer} />
    </>
  );
}

export default SkinSwitcher;
