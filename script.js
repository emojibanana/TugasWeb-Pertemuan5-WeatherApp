//Menggunakan 'const' untuk elemen DOM yang gk di asign ulang
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherResult = document.getElementById('weatherResult');
const errorMessage = document.getElementById('errorMessage');
const loading = document.getElementById('loading');

const API_KEY = '51d1b7d83e124363121fae68fbe4b567'; // TODO: pindahkan ke backend/env agar tidak bocor di frontend

const DEFAULT_BG = 'linear-gradient(135deg, #38bdf8 0%, #2563eb 50%, #7c3aed 100%)';

//Map kode cuaca OpenWeatherMap (data.weather[0].main) ke background + aksen (tombol, glow, garis, focus, spinner)
const weatherThemes = {
    Clear: { bg: 'linear-gradient(135deg, #fcd34d 0%, #fb923c 50%, #f43f5e 100%)', accent: '#f59e0b', accent2: '#ef4444' },
    Clouds: { bg: 'linear-gradient(135deg, #cbd5e1 0%, #64748b 60%, #334155 100%)', accent: '#64748b', accent2: '#334155' },
    Rain: { bg: 'linear-gradient(135deg, #38bdf8 0%, #2563eb 60%, #1e3a8a 100%)', accent: '#2563eb', accent2: '#1e3a8a' },
    Drizzle: { bg: 'linear-gradient(135deg, #7dd3fc 0%, #3b82f6 60%, #1e40af 100%)', accent: '#3b82f6', accent2: '#1e40af' },
    Thunderstorm: { bg: 'linear-gradient(135deg, #312e81 0%, #4c1d95 55%, #020617 100%)', accent: '#7c3aed', accent2: '#4c1d95' },
    Snow: { bg: 'linear-gradient(135deg, #f0f9ff 0%, #bae6fd 50%, #38bdf8 100%)', accent: '#0284c7', accent2: '#2563eb' },
    Atmosphere: { bg: 'linear-gradient(135deg, #e2e8f0 0%, #94a3b8 55%, #475569 100%)', accent: '#64748b', accent2: '#475569' },
    Default: { bg: DEFAULT_BG, accent: '#2563eb', accent2: '#7c3aed' },
};

//Kelompok kode "atmosphere" OpenWeatherMap disatukan ke satu tema
const atmosphereSet = new Set(['Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Ash', 'Squall', 'Tornado']);

//Ganti background + aksen (tombol, glow, garis bawah judul, focus input, spinner) sesuai cuaca
const updateBackground = (main) => {
    const key = atmosphereSet.has(main) ? 'Atmosphere' : main;
    const theme = weatherThemes[key] || weatherThemes.Default;
    document.body.style.background = theme.bg;
    document.body.style.backgroundAttachment = 'fixed';
    const root = document.documentElement.style;
    root.setProperty('--accent', theme.accent);
    root.setProperty('--accent2', theme.accent2);
    root.setProperty('--accent-soft', theme.accent + '26');
    root.setProperty('--accent-glow', theme.accent + '66');
};

//arrow function dipadukan dengan async await untuk mempermudah penulisan kode asynchronous
const fetchWeather = async (city) => {
    try {
        //1. Reset UI State (sembunyikan error message, tampilkan loading
        errorMessage.classList.add('hidden');
        weatherResult.innerHTML = '';
        loading.classList.remove('hidden');

        //2. Fetch data dari API
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=id`;
        const response = await fetch(URL);

        //3. Error handling untuk response yang tidak ok
        if (!response.ok) {
            //jika 404, lemparkan error khusus. Jika tidak, lemparkan error umum
            const errorMsg = response.status === 404 ? 'Kota tidak ditemukan. Coba lagi.' : 'Terjadi kesalahan. Coba lagi.';
            throw new Error(errorMsg); //lempar error ke catch block
        }

        //4. parsing data JSON dari response
        const data = await response.json();

        //5. Destructuring Object (fitur ES6) untuk mengambil properti yang dibutuhkan
        const { name } = data;
        const { temp, humidity } = data.main;
        const { icon, main } = data.weather[0];

        const weatherDesc = data.weather.map(item => item.description).join(', ');

        //5b. Update background sesuai kondisi cuaca (Clear/Clouds/Rain/dll)
        updateBackground(main);

        //6. Sembunyikan loading dan render hasil menggunakan template Literal (fitur ES6)
        loading.classList.add('hidden');
        weatherResult.innerHTML = `
        <div class="animate-fade-in">
            <h2 class="text-xl font-semibold text-slate-800">Cuaca di ${name}</h2>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Ikon cuaca: ${weatherDesc}" class="w-24 h-24 mx-auto my-1 rounded-full bg-gradient-to-br from-sky-100 to-violet-100 drop-shadow">
            <p class="text-5xl font-extrabold text-slate-800 leading-none my-1">${Math.round(temp)}°C</p>
            <p class="capitalize text-slate-500 text-lg font-medium">${weatherDesc}</p>
            <p class="text-slate-500 mt-1">Kelembapan: ${humidity}%</p>
        </div>
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
        errorMessage.textContent = 'Masukin nama kota dulu woi!!!';
        errorMessage.classList.remove('hidden');
    }
});

//Nyari tapi nunggu enter ditekan
cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        searchBtn.click();
    }
});