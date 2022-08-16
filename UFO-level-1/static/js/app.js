var sightings = data;

var tbody = d3.select("tbody")

var button = d3.select("#filter-btn")

button.on("click",generateTable)

function generateTable() {

	tbody.html("")

	d3.event.preventDefault();
	
	var inputDate = d3.select("#datetime").property("value")

	var filteredSightings = sightings.filter(sighting => sighting.datetime === inputDate)
	
	filteredSightings.forEach((sighting) => {
		var row = tbody.append("tr");
		Object.entries(sighting).forEach(([key,value]) => {
			var cell = row.append("td");
			cell.text(value);
		});
	});
};
	
