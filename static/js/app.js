// import the data from data.js
const tableData = data;

// import data from "/Users/Documents/workspace/test.json"

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// 11.5.1
// Introduction to Dynamic Tables

function buildTable(data) {
    // standard way to clear data, creating a blank canvas
    tbody.html("");

    // 11.5.2
    // Add forEach to Your Table

    data.forEach((dataRow) => {
      let row = tbody.append("tr");

      // put each sighting into it's own row
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
      });
    });
}

// 11.5.3
// Add Filters

  function handleClick() {
    // Grab the datetime value from the filter
    // from the original table data
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);
  