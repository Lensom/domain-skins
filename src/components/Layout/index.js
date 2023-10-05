import React, { useContext } from 'react';
import SkinSwitcher from '../SkinSwitcher';
import Header from '../Header';
import Footer from '../Footer';
import ThemeContext from '../../context';

const Layout = () => {
  const { styles, selectedSkin } = useContext(ThemeContext);

  if (selectedSkin === null || styles === null) {
    // Loader or Spinner
    return <div>Loading...</div>;
  }

  return (
    <>
      <SkinSwitcher />
      <Header className={styles.default?.header} />
      <main>Selected skin: {selectedSkin}</main>
      <Footer className={styles.default?.footer} />
    </>
  );
};

export default Layout;
