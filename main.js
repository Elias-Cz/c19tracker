// adds the enter key to be used by the search box
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getData(searchbox.value);
    console.log(searchbox.value)

  }
}
// gets data from api
const api_url = 'https://api.covid19api.com/'

async function getData() {

  let response = await fetch(`${api_url}total/country/${searchbox.value}`)
  let result = await response.json();

//logs data
console.log(result[result.length - 1].Deaths);
console.log(result[result.length - 1].Confirmed);
console.log(result[result.length - 1].Recovered);

//displays the data for the user
document.getElementById("country").textContent = [searchbox.value];
document.getElementById("deaths").textContent = result[result.length - 1].Deaths;
document.getElementById("confirmed").textContent = result[result.length - 1].Confirmed;
document.getElementById("recovered").textContent = result[result.length - 1].Recovered;
}

//getData()
