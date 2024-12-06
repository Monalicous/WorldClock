function updateTime() {
    let cityName = document.querySelector("#muscat");
    if (cityName) {
        let muscatDate = cityName.querySelector(".date");
        let muscatTime = cityName.querySelector(".time");
        let currentTime = moment().tz("Oman/Muscat");

        muscatDate.innerHTML = currentTime.format("MMMM Do YYYY");
        muscatTime.innerHTML = currentTime.format("h:mm:ss[ <small>]A[</small>]");
    }

    let cityTwo = document.querySelector("#tokyo");
    if (cityTwo) {
        let tokyoDate = cityTwo.querySelector(".date");
        let tokyoTime = cityTwo.querySelector(".time");
        let timeInTokyo = moment().tz("Asia/Tokyo");

        tokyoDate.innerHTML = timeInTokyo.format("MMMM Do YYYY");
        tokyoTime.innerHTML = timeInTokyo.format("h:mm:ss[ <small>]A[</small>]");
    }

    let cityThree = document.querySelector("#paris");
    if (cityThree) {
        let parisDate = cityThree.querySelector(".date");
        let parisTime = cityThree.querySelector(".time");
        let currentParisTime = moment().tz("France/Paris");

        parisDate.innerHTML = currentParisTime.format("MMMM Do YYYY");
        parisTime.innerHTML = currentParisTime.format("h:mm:ss[ <small>]A[</small>]");
    }


};

function changeCity(event) {
    let cityTimeZone = event.target.value
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let cities = document.querySelector("#cities");

    cities.innerHTML = `<div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                </div>
                <div class="time">${cityTime.format("h:mm:ss")}<small> ${cityTime.format("A")}</small></div>
                </div>` ;


}

updateTime();
setInterval(updateTime, 1000); // Updates the time every 1 second

let chooseCity = document.querySelector("#citi");
chooseCity.addEventListener("change", changeCity);