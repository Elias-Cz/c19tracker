var load;

function pageLoader() {
  load = setTimeout(showPage, 3000);
}

function showPage() {
  document.querySelector('.row').style.display = "flex"
  document.querySelector('.load').style.display = "none"
}

// adds the enter key to be used by the search box
const searchbox = document.querySelector('.searchbox');
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
  console.log(result)
  if (result.message == "Not Found") {
    alert('Country not found')
    document.querySelector('.searchbox').value = ""
  } else {

//logs data
console.log(result[result.length - 1].Deaths);
console.log(result[result.length - 1].Confirmed);
console.log(result[result.length - 1].Recovered);
console.log(result[result.length - 1].Date);

const months = ["JANUARY", "FEBRUARY", "MARCH","APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
let latest = result[result.length - 1].Date
let current_month = months[latest[5, 6] -1]
console.log(current_month)
let date = latest[latest.length -12] + latest[latest.length -11];



//displays the data for the user
document.getElementById("country").textContent = [searchbox.value];
document.getElementById("deaths").textContent = result[result.length - 1].Deaths;
document.getElementById("confirmed").textContent = result[result.length - 1].Confirmed;
document.getElementById("recovered").textContent = result[result.length - 1].Recovered;
document.getElementById("date").textContent = current_month + " " + date;
document.querySelector('.searchbox').value = ""
}
}

//getData()
