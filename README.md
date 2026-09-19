# Aplikasi Cuaca (Weather App) 🌦️

Aplikasi cuaca berbasis web sederhana yang dibangun menggunakan Vanilla JavaScript (ES6+). Proyek ini dibuat untuk keperluan tugas perkuliahan sekaligus sebagai media pembelajaran fundamental JavaScript, khususnya dalam mengelola *Asynchronous Programming* (Fetch API) dan *Error Handling*.

## ✨ Fitur Utama

- **Pencarian Real-Time:** Menampilkan data cuaca terkini berdasarkan nama kota yang diinputkan pengguna.
- **Error Handling Responsif:** Memberikan umpan balik (pesan error) yang jelas kepada pengguna jika kota tidak ditemukan (404) atau terjadi gangguan jaringan.
- **Clean Code (ES6+):** Menggunakan fitur JavaScript modern seperti:
  - `Async/Await` untuk proses *fetch* data yang lebih mudah dibaca.
  - *Arrow Functions*.
  - *Object Destructuring* untuk ekstraksi data JSON.
  - *Template Literals* untuk manipulasi DOM.

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
