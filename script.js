let country = ""
function submit(event){
    event.preventDefault()
    const input = document.getElementById("input")
    country = input.value;
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(result => result.json())
    .then(data => {
        const name = document.getElementById("name")
        const capital = document.getElementById("capital")
        const flag = document.getElementById("flag")
        flag.src = data[0].flags.png
        name.innerHTML = data[0].name.common
        capital.innerHTML = data[0].capital[0]
    })
}
function setcountries(){
    const endpoint = 'https://restcountries.com/v3.1/all'
    return fetch(endpoint)
    .then(result => result.json())
    .then(data => {
        let countries = []
        for(let i = 0;i<data.length;i++){
            countries.push({name: data[i].name.common, flag: data[i].flags.png })
        }
        return countries;
    })
}
setcountries()
.then(countries => {
    let randomCountry = countries[Math.floor(Math.random()*250)]
    const name = document.getElementById("name")
    const capital = document.getElementById("capital")
    const flag = document.getElementById("flag")
    name.innerHTML = randomCountry.name
    flag.src = randomCountry.flag
})

const button = document.getElementById("submit")
button.addEventListener('click', submit)