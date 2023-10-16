function TabList({ setCurrentPage, renderPage }) {
  return (
    <div className="Tabs" style={{}}>
      <nav>
        <ul className="Tab">
          <li className="TabList">
            <div onClick={() => setCurrentPage('Interactions')}>
              <h2>All Interactions</h2>
            </div>
          </li>
          <li className="TabList">
            <div onClick={() => setCurrentPage('Percenatge')}>
              <h2>Client Interactions</h2>
            </div>
          </li>
        </ul>
      </nav>
      {renderPage()}
    </div>
  );
}

export default TabList;
