import React, { useContext } from 'react';
import SkinSwitcher from '../SkinSwitcher';
import Header from '../Header';
import Footer from '../Footer';
import skinComponents from '../SkinComponents';
import ThemeContext from '../../context';

const Layout = () => {
  const { styles, selectedSkin } = useContext(ThemeContext);
  const SkinComponents = skinComponents[selectedSkin] || skinComponents.default;

  console.log(SkinComponents);

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
        {Array.isArray(SkinComponents) ? (
          // Если SkinComponents - это массив компонентов, отобразите их все
          SkinComponents.map((Component, index) => <Component key={index} />)
        ) : SkinComponents ? (
          // В противном случае отобразите один компонент
          <SkinComponents />
        ) : null}
      </main>

      <Footer className={styles.default?.footer} />
    </>
  );
};

export default Layout;
