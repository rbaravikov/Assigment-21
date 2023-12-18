/*
4. Padarykite, kad ištrynus produktą - puslapis persikrautų. Taip nėra labai efektyvu - pagalvokite, kokiais kitais būdais galima būtų pasiekti šį rezultatą? Hint: gavus success message iš back-end'o filtruoti duomenis ir ištrinti su front-end'u irgi. */


const API_URL = "https://sophisticated-humane-dandelion.glitch.me"
const cardsContainer = document.querySelector(".cards")

const fetchData = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json()
        createCard(data)
    } catch (err) {
      console.error(err)
    }
}

const createCard = (element) => {
    cardsContainer.innerHTML = ""
    element.map(x => {
        const newCard = document.createElement("div")
    newCard.classList.add("card")
    newCard.innerHTML = `<div class="img"><img src="${x.image}" alt="${x.title}"></div>
    <h4>${x.title}</h4>
    <p>€${x.price}</p>
    <button class="delete ${x.id}">Ištrinti</button>`
    cardsContainer.append(newCard)
    })
    var buttons = document.getElementsByClassName('delete');
    const buttonsArr = Array.from(buttons)
    buttonsArr.forEach(element => {
        element.addEventListener('click', () => delCard(Number(element.classList[1])))
    });
}

// ===============
const delCard = async (Id) => {
    try {
        const delById = await fetch(`${API_URL}/${Id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(res => console.log(res))
        fetchData()
    } catch (err) {
        console.error(err);
    }
}

fetchData()