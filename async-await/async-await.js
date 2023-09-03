

const fetchingCharacter = async () => {
  let chars = [];

  // fetch('https://api.disneyapi.dev/character')
  //   .then((response) => response.json())
  //   .then((response) => {
  //     chars = [...response.data];
  //   })

  const response = await fetch('https://api.disneyapi.dev/character');
  const characters = await response.json();
  chars = [...characters.data];
  console.log(chars);
}

fetchingCharacter();