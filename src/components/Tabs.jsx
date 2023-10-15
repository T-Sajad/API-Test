import React from 'react'
import { useState } from 'react';
import Percentage from './substantive';
import Interactions from './Interactions';
import TabList from './TabLIst';
// import TabsList from './Tabslist'

const UPCOMING = 'upcoming';
// TODO use constants for page names/keys
// TODO lower case strings plz
// TODO abstract the tab <li> into ts own component <Tab name={UPCOMING}>Upcoming</Tab>
// TODO better component styles (cursor, layout, selection)

function Options(){
    const [currentPage, setCurrentPage] = useState('Interactions');

    const renderPage = () => {
        switch (currentPage) {
          case 'Interactions':
            return <Interactions/>;
          case 'Percenatge':
            return <Percentage/>;
          default:
            return <Interactions/>;
        }
      };

return(
    <TabList setCurrentPage={setCurrentPage} renderPage={renderPage} />
)

}
export default Options