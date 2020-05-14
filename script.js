const baseURL = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php";
let url;

const searchTerm = document.querySelector(".search");
const searchForm = document.querySelector("form");
const submitBtn = document.querySelector(".submit");
const nav = document.querySelector("nav");
const section = document.querySelector("section");



let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener("submit", fetchResults);

function fetchResults(e) {
  e.preventDefault();
  //console.log(e);
  url = `${baseURL}?t=${searchTerm.value}`; //this is the starting point for a new api
  //console.log("URL:", url);
  
  fetch(url)
    .then(function(result) {
        //console.log(result)
        return result.json();
    }).then(function(json) {
        console.log(json);
        displayResults(json);
    });
}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    console.log("DisplayResults", json);
    let teams = json;
    //console.log(teams);
    if(teams.teams == null){
        console.log("No result");
    } else {
        for(let i = 0; i < teams.teams.length; i++) {
            //getting the info of each index of the array
            //console.log(teams.teams[i]);

            let team = document.createElement('h3');
            let teamName = document.createElement('h2');
            let current = teams.teams[i];
            team.textContent = "Team: " + current.strTeam;
            

            //team.appendChild(players)
            section.appendChild(team);
            

        }
   }
};