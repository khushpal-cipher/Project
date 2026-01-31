

const inp = document.querySelector("input");
const bt = document.querySelector(".search-btn");
const location = document.querySelector(".city");
const temperature = document.querySelector(".temp");

console.log(inp, bt, location, temperature);

bt.addEventListener("click", (e) => {
    e.preventDefault(); 

    const city = inp.value.trim();

    if (!city) {
        alert("Enter a city name");
        return;
    }

    inp.value = "";

    const api = `https://api.weatherapi.com/v1/current.json?key=fcdd7995da7d475eabb123833263001&q=${city}&aqi=no`;

    fetch(api)
        .then(res => res.json())
        .then(data => {

            if (data.error) {
                alert(data.error.message);
                return;
            }

            const temp = data.current.temp_c;
            const name = data.location.name;
            const country = data.location.country;

            locationEl.innerText = `${name}, ${country}`;
            temperatureEl.innerText = `${temp}°C`;
        })
        .catch(err => {
            console.error("Fetch error:", err);
        });
});
