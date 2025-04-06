# Laporan penugasan 1 Netics

## Deskripsi
Pada penugasan ini, saya menggunakan bahasa pemrograman javascript dengan native HTTP module bawaan NodeJS sebagai basis dari server endpoint api /health tanpa menggunakan framework eksternal lainnya. Hal ini saya lakukan karena hanya berfungsi untuk menampilkan api statis tanpa perlu menginstall dependensi yang lain. 
---

## CI/CD Pipeline
### Overview
- *Build:* Menggunakan NodeJS native HTTP/vanilla js sebagai server api. Tidak menggunakan npm karena tidak memerlukan dependensi eksternal.
- *Tes:* Pengetesan dilakukan secara manual dengan membuka ip pada browser, melakukan ping atau curl, serta melakukan pengetesan pada perangkat lain misalnya hp.
- *Deploy:* Deployment dilakukan pada vps Microsoft Azure dengan os ubuntu versi 22 dengan menghubungkan key pada github saya dan ssh key yang didapatkan dari vps, Github action sebagai environment untuk melakukan otomatisasi pada workflow yang ada pada struktur folder.
### Akses ke server <br>
Gunakan ip publik http://104.214.178.240/ untuk mengakses halaman index.php dan gunakan /health untuk mengakses halaman endpoint dari server api.
---

## Getting Started
### Prerequisites
- Docker
- NodeJS
- Git
- Github
- Code editor

---

## Struktur folder 
- .github/workflow/deploy.yml
- index.js
- index.php
- script.js
- Dockerfile
- docker-compose.yml
  <br>
Di sini, index.js berperan sebagai server sederhana untuk merespon request url dan mengirimnya ke index.php, saya memakai index.php karena biar tidak monoton saja sih, jadi kalau request nya ke alamat ip, user masih melihat sesuatu (walaupun cuma bacaan server is running doang).
Di sini saya menggunakan docker supaya environmentnya lebih terjaga dan terisolasi serta konsisten. Image tidak perlu dipush ke dockerhub saya langsung build di vps. VPS yang saya gunakan adalah produk dari Microsoft Azure (terima kasih ITS walau cuma 100$).

<br><br><br><br>
<br><br><br><br>
<br><br><br><br>
<br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br>
<br><br><br><br>

# Aku cinta ITS
