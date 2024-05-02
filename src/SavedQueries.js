export function SavedQueries(params) {
  function onSavedQueryClick(savedQuery) {
    params.onQuerySelect(savedQuery);
  };

  function getQueries() {
    return params.savedQueries.map((item, idx) => {
      let trimTitle = item.queryName.substring(0, 30);
      return (<tr
        key={idx}
        onClick={() => onSavedQueryClick(item)}
        className={(item.queryName === params.selectedQueryName) ? "selected" : ""}>
        <td>{trimTitle}</td>
        <td>{item.q}</td>
        <td>{item.language}</td>
        <td>{item.pageSize}</td>
      </tr>
      );
    })
  };

  let emptyList = [];
  function onResetClick(event) {
    let result = window.confirm(
      "Are you sure you want to reset the saved queries?"
    );
    if (result) {
      params.setSavedQueries(emptyList);
      params.saveQueryList(SavedQueries);
    }
  };

  return (
    <div>
      {params.savedQueries && params.savedQueries.length > 0 ? (
        <table className="table-border">
          <thead>
            <tr>
              <th>Query Name</th>
              <th>Query Text</th>
              <th>Language</th>
              <th>Page Size</th>
            </tr>
          </thead>
          <tbody>{getQueries()}</tbody>
        </table>
      ) : (
        <p>No Saved Queries, Yet!</p>
      )}

      {/* - Add a "reset" button to the SavedQuery component 
        - Do not display the "reset" button when no user is logged in. */}
      <div className={`${params.currentUser == null ? "hidden" : "visible"}`}>
        <span style={{ display: "block" }}>
          <button type="button" onClick={onResetClick}>
            Reset Saved Queries
          </button>
        </span>
      </div>
    </div>
  );

}