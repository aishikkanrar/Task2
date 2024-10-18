const APIKEY = 'b1e148d9f87749f28ff83539243008'; // Corrected spelling

// Elements
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('city-name');
const countryName = document.getElementById('countryName');
const localTime = document.getElementById('loc-time');
const temp = document.getElementById('temp');
const sup = document.getElementById('sup');
const outputCard = document.getElementById('outputCard');

// Function to fetch data
async function getData(APIKEY, city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${city}&aqi=yes`);
    return await response.json();
}

// Event listener for search button
searchBtn.addEventListener('click', async () => {
    const input = cityInput.value;
    outputCard.classList.add('visible');
    
    try {
        const result = await getData(APIKEY, input);
        
        cityName.innerText = `${result.location.name}, ${result.location.region}`;
        countryName.innerText = result.location.country;
        temp.innerText = result.current.temp_c;
        sup.innerText = '°C';
        localTime.innerText = result.location.localtime;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        cityName.innerText = 'City not found or error fetching data';
    }
});
