// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://restcountries.com/v3.1/all');

// xhr.send();

// xhr.onload = function () {
//   const response = JSON.parse(xhr.responseText);
//   console.log(response);
// }

fetch('https://restcountries.com/v3.1/all')
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((countries) => {
    console.log(countries);
  });


// Session Task:
// use fetch and get the data from the below url,
// https://api.disneyapi.dev/character

// Print the array of disney characters
fetch('https://api.disneyapi.dev/character')
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then(({ data, info }) => {
    console.log(data, info);
  });
