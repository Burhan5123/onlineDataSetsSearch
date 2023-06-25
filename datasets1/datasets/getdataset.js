// JavaScript source code
//retrieves data from city of calgary
function loaddata() {

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			// r = xhr.JSONparse(responseText);
			displayData(xhr);//display data
		}
	};
	xhr.open("GET", "https://data.calgary.ca/resource/35ra-9556.json", true);
	xhr.send();




}

/*
 * object data sample:
 *  {
        "incident_info": " 12 Avenue and 8 Street SW ",
        "description": "Two vehicle incident.",
        "start_dt": "2019-03-16T17:20:54.000",
        "longitude": "-114.081523679407",
        "latitude": "51.0419401824926",
        "location": {
            "latitude": "51.041940182493",
            "longitude": "-114.081523679407"
        },
        "count": "1",
        "id": "2019031617205451.0419401824926-114.081523679407",
        ":@computed_region_4a3i_ccfj": "1",
        ":@computed_region_4b54_tmc4": "14",
        ":@computed_region_p8tp_5dkv": "2",
        ":@computed_region_kxmf_bzkv": "260"
    },
 * 
 */


function displayData(xhr) {
	//displays json data. 
	//for testing purposes, display only partial data
	var r = JSON.parse(xhr.responseText);
	var output = "";
	for (var i = 0; i < r.length; i++) {

		var obj = r[i];
		output+="Incident Info: "
		output += obj.incident_info;
		output += "<br>";
		output+="Description: "
		output += obj.description;
		output += "<br>";
		output+="Incident Id: "
		output += obj.id;
		output += "<br>";

	}
	document.getElementById("records").innerHTML = output;


}