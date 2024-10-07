fetch('./town.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

fetch('./town-pack.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

fetch('./town-physics.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
