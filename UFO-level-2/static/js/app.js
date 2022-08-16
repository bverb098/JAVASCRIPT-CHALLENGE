var sightings = data;

var tbody = d3.select("tbody")

var filterButton = d3.select("#filter-btn")
var showallButton = d3.select("#showall-btn")

var cityDropdown= d3.select("#city")
var stateDropdown=d3.select("#state")
var countryDropdown=d3.select("#country")
var shapeDropdown=d3.select("#shape")

filterButton.on("click",generateTable)
showallButton.on("click",fullTable)

function init() {
	//create city dropdown menu
	var cities = []
	sightings.forEach(sighting => {
		var city=sighting.city
		if (!cities.includes(city)) {
			cities.push(city)
		}
	});

	cities.forEach(city => {
		var cityOption = cityDropdown.append("option").text(city)
	});

	//create state dropdown menu
	var states = []
	sightings.forEach(sighting => {
		var state=sighting.state
		if (!states.includes(state)) {
			states.push(state)
		}
		
	});

	states.forEach(state => {
		var stateOption = stateDropdown.append("option").text(state)
	});

	//create country dropdown menu
	var countries = []
	sightings.forEach(sighting => {
		var country=sighting.country
		if (!countries.includes(country)) {
			countries.push(country)
		}
	});

	countries.forEach(country => {
		var countryOption = countryDropdown.append("option").text(country)
	});

	//create shape dropdown menu
	var shapes = []
	sightings.forEach(sighting => {
		var shape=sighting.shape
		if (!shapes.includes(shape)) {
			shapes.push(shape)
		}
	});

	shapes.forEach(shape => {
		var shapeOption = shapeDropdown.append("option").text(shape)
	});
		
};

function generateTable() {

	tbody.html("")

	var inputDate = d3.select("#datetime").property("value")

	var inputCity = d3.select("#city").property("value")

	var inputState = d3.select("#state").property("value")

	var inputCountry = d3.select("#country").property("value")

	var inputShape = d3.select("#shape").property("value")

	var filters = {}
	if(inputDate) {
		filters["datetime"] = inputDate
	}
	if(inputCity) {
		filters["city"] = inputCity
	}
	if(inputState) {
		filters["state"] = inputState
	}
	if(inputCountry) {
		filters["country"] = inputCountry
	}
	if(inputShape) {
		filters["shape"] = inputShape
	}


	console.log(filters)	
	var filteredSightings=sightings
	Object.entries(filters).forEach(([key,value]) => {
		filteredSightings = filteredSightings.filter(sighting => {
			return sighting[key] === value
		})
	});
	
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
};

init();
	
