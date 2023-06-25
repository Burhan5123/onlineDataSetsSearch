//New York Traffic
var xhr = new XMLHttpRequest;//XMLHTTPRequest object
var parsedrecord;//parsed JSON file
//load pageSetup
window.onload=pageSetup;

function pageSetup() {
	
    
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
     parsedrecord = JSON.parse(xhr.responseText);
      runEmDown();
    }
  };
  xhr.open("GET", "https://data.cityofnewyork.us/resource/h9gi-nx95.json", true);
  xhr.send();
	
	
}

function runEmDown()
{
    var killed=0;
    var wounded=0;
    var output;

    for(var i=0;i<parsedrecord.length;i++)
    {
        var record=parsedrecord[i];
        //
        if(record.number_of_cyclist_injured>0)
        {
            wounded++;
        }
        if(record.number_of_cyclist_killed>0)
        {
            killed++;
        }

    }

    output="Killed: "+killed+" Wounded: "+wounded;
    //output
    document.getElementById("damage").innerHTML=output;

}