const response = fetch("https://www.world-wonders-api.org/v0/wonders");

response.then((resolved) => {
    const json = resolved.json();

    return json;
}).then((data) => {
    console.log(data)

    const cardTemplate = document.getElementById("card-template");
    const cardSection = document.getElementById("card-section");

    data.forEach(wonder => {

        const cardClone = cardTemplate.cloneNode(true);
        cardClone

        cardClone.querySelector('.name').textContent = wonder.name;
        cardClone.querySelector('.location').textContent = wonder.location;
        cardClone.querySelector('.build-year').textContent = wonder.build_year;
        cardClone.querySelector('.time-period').textContent = wonder.time_period;
        cardClone.querySelector('.summary').textContent = wonder.summary;
        cardClone.querySelector('.front-image').src = wonder.links.images[0];
        cardClone.querySelector('.back-image').src = wonder.links.images[1];




        cardSection.appendChild(cardClone);

    })
    const cards = document.querySelectorAll(".card");
    cards[0].style.display = "none";
});