// import the data from data.js
const tableData = data;

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

