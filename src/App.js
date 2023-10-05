import { useState } from 'react';
import ThemeContext from './context';
import Layout from './components/Layout';
import useSkinSelector from './hooks/useSkinSelector';

import './styles/main.scss';

function App() {
  const selectedSkin = useSkinSelector();
  const [styles, setStyles] = useState({ default: {} });
  return (
    <ThemeContext.Provider value={{ selectedSkin, setStyles, styles }}>
      <div className="App">
        <Layout />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
