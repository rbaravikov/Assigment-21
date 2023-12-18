/*
3. Padarykite, kad paspaudus delete mygtuką - back-end'ui būtų išsiunčiamas Fetch Delete Request (baseURL + /:id). T.y. į url turėsite paduoti produkto ID parametrą (pvz.: DELETE baseURL/1 ištrins pirmą įrašą).
4. Padarykite, kad ištrynus produktą - puslapis persikrautų. Taip nėra labai efektyvu - pagalvokite, kokiais kitais būdais galima būtų pasiekti šį rezultatą? Hint: gavus success message iš back-end'o filtruoti duomenis ir ištrinti su front-end'u irgi. */


const API_URL = "https://sophisticated-humane-dandelion.glitch.me"
const image = document.getElementById("image")
const product = document.getElementById("product")
const price = document.getElementById("price")
const button = document.getElementById("submit")
const link = document.querySelector("a")

const postData = async (image, title, price) => {
    try {

        const newProductData = {image: image, title: title, price: price}

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(newProductData)
        });
      const data = await response.json()
      if(data.msg == "Product added") alert(data.msg)
      console.log(data)
      window.location.replace(link, "_self")
} catch (err) {
    console.error(err);
    }
}

button.addEventListener('click', (e) => {
    e.preventDefault()
    postData(image.value, product.value, price.value)
    image.value = ""
    product.value = ""
    price.value = ""
})
