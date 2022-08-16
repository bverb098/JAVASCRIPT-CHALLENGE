var sightings = data;

var tbody = d3.select("tbody")

var filterButton = d3.select("#filter-btn")

var showallButton = d3.select("#showall-btn")

filterButton.on("click",generateTable)

showallButton.on("click",fullTable)

function generateTable() {

	tbody.html("")

	d3.event.preventDefault();
	
	var inputDate = d3.select("#datetime").property("value")

	var inputCity = d3.select("#city").property("value")

	var inputState = d3.select("#state").property("value")

	var inputCountry = d3.select("#country").property("value")

	var inputShape = d3.select("#shape").property("value")

	if (inputDate) {
		var filteredSightings = sightings.filter(sighting => sighting.datetime === inputDate)
	};
	if (inputCity) {
		var filteredSightings = sightings.filter(sighting => sighting.city === inputCity);
	}
	if (inputCountry) {
	var filteredSightings = sightings.filter(sighting => sighting.country === inputCountry);
	};
	if (inputShape) {
		var filteredSightings = sightings.filter(sighting => sighting.shape === inputShape)
	};
		
	filteredSightings.forEach((sighting) => {
		var row = tbody.append("tr");
		Object.entries(sighting).forEach(([key,value]) => {
			var cell = row.append("td");
			cell.text(value);
		});
	});
};

function fullTable () {

	tbody.html("")

	d3.event.preventDefault();
	
	sightings.forEach((sighting) => {
		var row = tbody.append("tr");
		Object.entries(sighting).forEach(([key,value]) => {
			var cell = row.append("td");
			cell.text(value);
		});
	});
}
	
