//Menggunakan 'const' untuk elemen DOM yang gk di asign ulang
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherResult = document.getElementById('weatherResult');
const errorMessage = document.getElementById('errorMessage');
const loading = document.getElementById('loading');

const API_KEY = '51d1b7d83e124363121fae68fbe4b567';

//arrow function dipadukan dengan async await untuk mempermudah penulisan kode asynchronous
const fetchWeather = async (city) => {
    try {
        //1. Reset UI State (sembunyikan error message, tampilkan loading
        errorMessage.classList.add('hidden');
        weatherResult.innerHTML = '';
        loading.classList.remove('hidden');

        //2. Fetch data dari API
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(URL);

        //3. Error handling untuk response yang tidak ok
        if (!response.ok) {
            //jika 404, lemparkan error khusus. Jika tidak, lemparkan error umum
            const errorMsg = response.status === 404 ? 'City not found. Please try again.' : 'An error occurred. Please try again.';
            throw new Error(errorMsg); //lempar error ke catch block
        }

        //4. parsing data JSON dari response
        const data = await response.json();

        //5. Destructuring Object (fitur ES6) untuk mengambil properti yang dibutuhkan
        const { name } = data;
        const { temp } = data.main;
        const { description, icon } = data.weather[0];

        //6. Sembunyikan loading dan render hasil menggunakan template Literal (fitur ES6)
        loading.classList.add('hidden');
        weatherResult.innerHTML = `
        <h2>Cuaca di ${name}</h2>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
        <p class="temperature">${Math.round(temp)}°C</p>
        <p class="description">${description}</p>
        `;
    } catch (error) {
        //Error handling level 2 = nangkep error dari block try
        loading.classList.add('hidden');
        errorMessage.textContent = error.message;
        errorMessage.classList.remove('hidden');

        //Log console untuk debugging developer
        console.error('Error nangkep data cuaca:', error);
    }
};

//Event Listener kalo tombol di klik
searchBtn.addEventListener ('click', () => {
    //ngasih spasi lebih di awal ma akhir input
    const cityName = cityInput.value.trim();

    if (cityName) {
        fetchWeather(cityName);
    } else {
        alert ('Masukin nama kota dulu woi!!!');
    }
});

//Nyari tapi nunggu enter ditekan
cityInput.addEventListener('keypress', (event) => {
    if (event === 'Enter'){
        searchBtn.click();
    }
});