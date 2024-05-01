export function SavedQueries(params) {
    function onSavedQueryClick(savedQuery){
      params.onQuerySelect(savedQuery);
    };
  
    function getQueries() {
      return params.savedQueries.map((item, idx) => {
        let trimTitle = item.queryName.substring(0, 30);
        return (<li 
          key={idx} 
          onClick={()=>onSavedQueryClick(item)} 
          className={(item.queryName === params.selectedQueryName)?"selected":""}
        >{trimTitle + ": \"" + item.q + "\""} </li>);
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
          <ul >{
            (params.savedQueries && params.savedQueries.length > 0)
            ? getQueries()
            : <li>No Saved Queries, Yet!</li>
        }</ul>
        
        {/* - Add a "reset" button to the SavedQuery component 
        - Do not display the "reset" button when no user is logged in. */}
        <div className={`${(params.currentUser == null) ? "hidden" : "visible"}`}>
          <span style={{ display: "block" }}>
            <input
              type="button"
              value="Reset Saved Queries"
              onClick={onResetClick}
            />
          </span>
        </div>
      </div>
    )
    
}