setInterval(function () {
    let cityName = document.querySelector("#muscat");
    let muscatDate = cityName.querySelector(".date");
    let muscatTime = cityName.querySelector(".time");
    let currentTime = moment().tz("Oman Muscat");

    muscatDate.innerHTML = currentTime.format("MMMM Do YYYY");
    muscatTime.innerHTML = currentTime.format("h:mm:ss[ <small>]A[</small>]");
}, 2000);