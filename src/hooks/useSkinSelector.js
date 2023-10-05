import { useState, useEffect } from 'react';
import domains from '../config/domains';

const useSkinSelector = () => {
  const [selectedSkin, setSelectedSkin] = useState(null);

  useEffect(() => {
    const domain = window.location.hostname;
    console.log(domain, 'domain');
    setSelectedSkin(domains[domain] || 'default');
  }, []);

  return selectedSkin;
};

export default useSkinSelector;
