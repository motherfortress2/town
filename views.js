fetch('./town.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
