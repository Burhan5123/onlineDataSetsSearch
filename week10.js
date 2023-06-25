var xhr = new XMLHttpRequest();
var r=r || [];

function getpage(id){
    clearResults();
    if(id == "dataset1"){
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200 ) {
        document.getElementById("searchItem").innerHTML = xhr.responseText;
        setTimeout(loaddata1,1000);
      }
    };
        xhr.open("GET", "form1.html", true);
        xhr.send();
        
  }
        if(id == "dataset2"){
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("searchItem").innerHTML = xhr.responseText;
        setTimeout(loaddata2,1000);
      }
    };
        xhr.open("GET", "form2.html", true);
        xhr.send();
      }

        if(id == "dataset3"){
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {    
        document.getElementById("searchItem").innerHTML = xhr.responseText;
        setTimeout(loaddata3,1000);
        }
      };
        xhr.open("GET", "form3.html", true);
        xhr.send();
  }
}
function clearResults()
{
    document.getElementById("searchresults").innerHTML="";
    document.getElementById("searchresults").innerHTML="";
    document.getElementById("searchresults").innerHTML="";
    document.getElementById("searchItemBy").innerHTML="";
    document.getElementById("searchItemBy").innerHTML="";
    document.getElementById("searchItemBy").innerHTML="";
}

function loaddata1() {

	document.getElementById("complaintNumber").addEventListener("keyup", function (){ complaintNumber(this.value);},false);
	document.getElementById("houseNumber").addEventListener("keyup", function (){ searchHouseNumber(this.value);},false);
	
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
         r = JSON.parse(xhr.responseText);
    
        }
      };
      xhr.open("GET", "https://data.cityofnewyork.us/resource/eabe-havv.json", true);
      xhr.send();

}

function loaddata2() {

	document.getElementById("age").addEventListener("keyup", function (){ searchAge(this.value);},false);
    document.getElementById("gender").addEventListener("keyup", function (){ searchGender(this.value);},false);
	
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
         r = JSON.parse(xhr.responseText);
    
        }
      };
      xhr.open("GET", "https://data.cityofnewyork.us/resource/f55k-p6yu.json", true);
      xhr.send();

}

function loaddata3() {

	document.getElementById("zipCode").addEventListener("keyup", function (){ searchZipCode(this.value);},false);
	document.getElementById("police").addEventListener("keyup", function (){ searchPolicePrecinct(this.value);},false);
	

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
         r = JSON.parse(xhr.responseText);
    
        }
      };
      xhr.open("GET", "https://data.cityofnewyork.us/resource/8m42-w767.json", true);
      xhr.send();
}
    
function complaintNumber(cNumber) {
	
	document.getElementById("searchItemBy").innerHTML="Search by Complaint Number"+"<br>";
	var output="<tr class=heading><th>Complaint Number</th><th>Status</th><th>House Number</th><th>Zip Code</th><th>House Street</th></tr>";
	var searchnumber;
	for(var i=0; i<r.length; i++)
	{
		var obj=r[i];
		searchnumber=obj.complaint_number;
		if(searchnumber && searchnumber.startsWith(cNumber))
		{	
				
            output+="<tr><td>";
			output+=obj.complaint_number;
			output+="</td><td>";
			output+=obj.status;
			output+="</td><td>";
			output+=obj.house_number;
			output+="</td><td>";
			output+=obj.zip_code;
			output+="</td><td>";
			output+=obj.house_street;
			output+="</td></tr>";
		}
				
	}
document.getElementById("searchresults").innerHTML=output;


}
function searchHouseNumber(houseNumber) {

	document.getElementById("searchItemBy").innerHTML="Search by House Number"+"<br>";
	var output="<tr class=heading><th>Complaint Number</th><th>Status</th><th>House Number</th><th>Zip Code</th><th>House Street</th></tr>";
	var searchnumber2;
	for(var i=0; i<r.length; i++)
	{
		var obj=r[i];
		searchnumber2=obj.house_number;
		if(searchnumber2 && searchnumber2.startsWith(houseNumber))
		{

			output+="<tr><td>";
			output+=obj.complaint_number;
			output+="</td><td>";
			output+=obj.status;
			output+="</td><td>";
			output+=obj.house_number;
			output+="</td><td>";
			output+=obj.zip_code;
			output+="</td><td>";
			output+=obj.house_street;
			output+="</td></tr>";
		}

	}
	document.getElementById("searchresults").innerHTML=output;


}

function searchAge(age) {

	document.getElementById("searchItemBy").innerHTML="Search by Age"+"<br>";
	var output="<tr class=heading><th>Unique ID</th><th>Crash Time</th><th>Person Type</th><th>Age</th><th>Gender</th></tr>";
	var searchage;
	for(var i=0; i<r.length; i++)
	{
		var obj=r[i];
		searchage=obj.person_age;
		if(searchage && searchage.startsWith(age))
		{

            output+="<tr><td>";
			output+=obj.unique_id;
			output+="</td><td>";
			output+=obj.crash_time;
			output+="</td><td>";
			output+=obj.person_type;
			output+="</td><td>";
			output+=obj.person_age;
			output+="</td><td>";
			output+=obj.person_sex;
			output+="</td><td>";
		}

	}
	document.getElementById("searchresults").innerHTML=output;


}

function searchGender(gender) {

	document.getElementById("searchItemBy").innerHTML="Search by Gender"+"<br>";
	var output="<tr class=heading><th>Unique ID</th><th>Crash Time</th><th>Person Type</th><th>Age</th><th>Gender</th></tr>";
	var searchgender;
	for(var i=0; i<r.length; i++)
	{
		var obj=r[i];
		searchgender=obj.person_sex;
		if(searchgender && searchgender.startsWith(gender))
		{

            output+="<tr><td>";
			output+=obj.unique_id;
			output+="</td><td>";
			output+=obj.crash_time;
			output+="</td><td>";
			output+=obj.person_type;
			output+="</td><td>";
			output+=obj.person_age;
			output+="</td><td>";
			output+=obj.person_sex;
			output+="</td><td>";
		}
	}
	document.getElementById("searchresults").innerHTML=output;

}

function searchZipCode(zipcode) {

	document.getElementById("searchItemBy").innerHTML="Search by Zip Code"+"<br>";
	var output="<tr class=heading><th>Alarm Box No.</th><th>Alarm Box Location</th><th>Zipcode</th><th>Police Precinct</th><th>District</th></tr>";
	var searchzipcode;
	for(var i=0; i<r.length; i++)
	{
		var obj=r[i];
		searchzipcode=obj.zipcode;
		if(searchzipcode && searchzipcode.startsWith(zipcode))
		{

            output+="<tr><td>";
			output+=obj.alarm_box_number;
			output+="</td><td>";
			output+=obj.alarm_box_location;
			output+="</td><td>";
			output+=obj.zipcode;
			output+="</td><td>";
			output+=obj.policeprecinct;
			output+="</td><td>";
			output+=obj.communitydistrict;
			output+="</td><td>";
		}
	}
	document.getElementById("searchresults").innerHTML=output;

}

function searchPolicePrecinct(policeprecinct) {

	document.getElementById("searchItemBy").innerHTML="Search by Police Precinct"+"<br>";
	var output="<tr class=heading><th>Alarm Box No.</th><th>Alarm Box Location</th><th>Zipcode</th><th>Police Precinct</th><th>District</th></tr>";
	var searchpolice;
	for(var i=0; i<r.length; i++)
	{
		var obj=r[i];
		searchpolice=obj.policeprecinct;
		if(searchpolice && searchpolice.startsWith(policeprecinct))
		{

            output+="<tr><td>";
			output+=obj.alarm_box_number;
			output+="</td><td>";
			output+=obj.alarm_box_location;
			output+="</td><td>";
			output+=obj.zipcode;
			output+="</td><td>";
			output+=obj.policeprecinct;
			output+="</td><td>";
			output+=obj.communitydistrict;
			output+="</td><td>";
		}
	}
	document.getElementById("searchresults").innerHTML=output;

}

