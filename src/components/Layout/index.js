import React, { useContext } from 'react';
import SkinSwitcher from '../SkinSwitcher';
import Header from '../Header';
import Footer from '../Footer';
import skinComponents from '../SkinComponents';
import ThemeContext from '../../context';

const Layout = () => {
  const { styles, selectedSkin } = useContext(ThemeContext);
  const SkinComponents = skinComponents[selectedSkin] || skinComponents.default;

  if (selectedSkin === null || styles === null) {
    // Loader or Spinner
    return <div>Loading...</div>;
  }

  return (
    <>
      <SkinSwitcher />
      <Header className={styles.default?.header} />
      <main>
        Selected skin: {selectedSkin}
        <br />
        {/* Or send to separate component */}
        {Array.isArray(SkinComponents) ? (
          // If skin components are array
          SkinComponents.map((Component, index) => <Component key={index} />)
        ) : SkinComponents ? (
          // If only one element
          <SkinComponents />
        ) : null}
      </main>

      <Footer className={styles.default?.footer} />
    </>
  );
};

export default Layout;
