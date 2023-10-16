import React from 'react';
import { useState } from 'react';
import Percentage from './substantive';
import Interactions from './Interactions';
import TabList from './TabLIst';

function Options() {
  const [currentPage, setCurrentPage] = useState('Interactions');

  const renderPage = () => {
    switch (currentPage) {
      case 'Interactions':
        return <Interactions />;
      case 'Percenatge':
        return <Percentage />;
      default:
        return <Interactions />;
    }
  };

  return (
    <TabList
      setCurrentPage={setCurrentPage}
      renderPage={renderPage}
    />
  );
}
export default Options;
