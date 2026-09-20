# Weather App Tugas 5 🌦️

Aplikasi cuaca berbasis web sederhana yang dibangun menggunakan Vanilla JavaScript (ES6+). Proyek ini dibuat untuk keperluan tugas perkuliahan sekaligus sebagai media pembelajaran fundamental JavaScript, khususnya dalam mengelola *Asynchronous Programming* (Fetch API) dan *Error Handling*.

## 📝 Syarat & Kriteria Tugas yang Diselesaikan

Proyek ini telah memenuhi seluruh kriteria penugasan berikut:

- [x] **Gunakan ES6+ (const, arrow functions, template literals)**.
- [x] **async/await + Fetch API:**.
- [x] **Tampilkan: kota, suhu, deskripsi, ikon, kelembaban**.
- [x] **Error handling: kota tidak ditemukan (404)**.
- [x] **Loading state saat fetch data**.
- [x] **Minimal 1 array method (map/filter/reduce) (Menggunakan .map())**.
- [x] **UI responsif (mobile-friendly)**.

---

## 🚀 Teknologi yang Digunakan

- **HTML5:** Struktur semantik aplikasi.
- **CSS3:** Styling dasar (tanpa framework) agar tampilan bersih dan responsif.
- **Vanilla JavaScript:** Logika utama aplikasi.
- **OpenWeatherMap API:** Sumber data cuaca.
## 🛠️ Cara Menjalankan Proyek (Setup)

1. Clone repositori ini ke komputer lokal kamu:
   ```bash
   git clone https://github.com/username-kamu/nama-repo-kamu.git
   ```
2. Buka folder proyek di dalam text editor (misal: VS Code).
3. Buat akun di [OpenWeatherMap](https://openweathermap.org/) dan dapatkan API Key secara gratis.
4. Buka file `script.js` dan temukan baris berikut:
   ```javascript
   const API_KEY = 'MASUKKAN_API_KEY_KAMU_DISINI';
   ```
5. Ganti teks `MASUKKAN_API_KEY_KAMU_DISINI` dengan API Key milikmu.
6. Buka file `index.html` di browser web (bisa menggunakan *Live Server* atau langsung klik dua kali file tersebut).

## 📂 Struktur Direktori

```text
├── index.html   # Struktur utama halaman (UI)
├── style.css    # Pengaturan gaya dan tata letak
├── script.js    # Logika program dan integrasi API
└── README.md    # Dokumentasi proyek
---
