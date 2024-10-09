const urlBase = `https://api.openweathermap.org/data/2.5/weather`
const apiKey = `5bca80986e68c727c0849d8b9d966aee`
const diffKelvin = 237

document.getElementById("searchButton").addEventListener("click", () => {
    const city = document.getElementById("citiInput").value
    if(city){
        fetchWeather(city)
    }else{
        alert("Ingrese una ciudad valida")
    }
}) 

function fetchWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${apiKey}&lang=es`)
    .then(data => data.json())
    .then(data => showWeatherData(data))

}

function showWeatherData(data){
    const divResponseData = document.getElementById("responseData")
    divResponseData.innerHTML = ""

    const cityNanme = data.name
    const countryName = data.sys.country
    const tempData = data.main.temp
    const humidityData = data.main.humidity
    const descriptionData = data.weather[0].description
    const iconData = data.weather[0].icon    

    const cityInfo = document.createElement(`h2`)
    cityInfo.textContent = `${cityNanme}, ${countryName}`

    const tempInfo = document.createElement(`p`)
    tempInfo.textContent = `La temperatura es ${Math.floor(tempData-diffKelvin)} Grados`

    const humidityInfo = document.createElement(`p`)
    humidityInfo.textContent = `La humedad es de ${humidityData}%`

    const iconInfo = document.createElement(`img`)
    iconInfo.src = `https://openweathermap.org/img/wn/${iconData}@2x.png`
    
    const descriptionInfo = document.createElement(`p`)
    descriptionInfo.textContent = `La descripcion meteorologica es: ${descriptionData}`

    divResponseData.appendChild(cityInfo)
    divResponseData.appendChild(tempInfo)
    divResponseData.appendChild(humidityInfo)
    divResponseData.appendChild(iconInfo)
    divResponseData.appendChild(descriptionInfo)
    
}

