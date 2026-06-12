# Personal Web Portfolio - Muhammad Fiqih

Website ini adalah portofolio pribadi yang dirancang dan dikembangkan dari nol untuk menampilkan profil, keahlian, dan proyek-proyek yang telah saya kerjakan. 

Selain berfungsi sebagai media *personal branding*, repository dan website ini dibuat secara khusus untuk memenuhi kriteria tugas evaluasi pada mata kuliah **Dasar Desain Antarmuka Pengguna** di **Universitas Brawijaya**.

## Tautan Demo Langsung (Live Demo)

Website portofolio ini sudah dideploy secara publik dan dapat diakses secara langsung tanpa perlu mengunduh source code. Silakan klik tautan di bawah ini untuk melihat demo aplikasinya:

**[web-portfolio-xi-flax.vercel.app](https://web-portfolio-xi-flax.vercel.app/)**

> **Informasi Tambahan:** Proses deployment menggunakan layanan cloud dari **Vercel** yang terintegrasi dengan fitur *Continuous Integration/Continuous Deployment* (CI/CD) GitHub. Setiap kali ada perubahan kode pada repository ini, website publik akan diperbarui secara otomatis.

## Teknologi yang Digunakan (Tech Stack)

Website ini dibangun secara mandiri dari awal tanpa menggunakan framework CSS/JS eksternal, untuk memperkuat pemahaman terhadap konsep fundamental pemrograman web. Berikut adalah teknologi yang diterapkan:

*   **HTML5:** Digunakan untuk membangun struktur dasar dan kerangka halaman web dengan menerapkan elemen semantik demi aksesibilitas yang baik.
*   **CSS3:** Digunakan untuk mengatur tata letak, pewarnaan, dan estetika visual. Proyek ini memanfaatkan **Flexbox** untuk pengaturan posisi elemen dan **Media Queries** untuk memastikan web ramah di layar HP.
*   **Vanilla JavaScript (ES6):** Digunakan untuk DOM *Manipulation* dan menangani interaktivitas website secara murni tanpa *library* tambahan (seperti pengaturan *scroll* dan *modal*).
*   **Font Awesome:** Digunakan sebagai *library* pihak ketiga untuk menampilkan ikon-ikon visual yang responsif (seperti ikon Email, GitHub, dan LinkedIn pada bagian *footer*).
*   **Git:** Digunakan sebagai *Version Control System* (VCS) lokal untuk mencatat dan mengelola setiap perubahan kode selama proses pengembangan.
*   **GitHub:** Digunakan sebagai *remote repository* berbasis *cloud* untuk menyimpan *source code* secara aman secara online.
*   **Vercel:** Digunakan sebagai platform *cloud hosting* otomatis (CI/CD) untuk meluncurkan website ke server publik.

## Fitur Utama (Key Features)

1.  **Dynamic Navbar & ScrollSpy:** Bar navigasi akan berubah secara dinamis ketika pengguna melakukan *scroll*. Selain itu, indikator menu aktif akan otomatis berpindah mengikuti *section* halaman yang sedang dibaca oleh pengguna.
2.  **Interactive Custom Modals:** Menggunakan sistem *pop-up* (modal) interaktif yang dibangun menggunakan JavaScript untuk menampilkan detail deskripsi proyek dan menu kontak. Ini memberikan pengalaman pengguna (UX) yang lebih rapi tanpa perlu memuat ulang halaman.
3.  **Fully Responsive Design:** Tata letak website dirancang agar beradaptasi secara mulus dan nyaman digunakan di berbagai ukuran layar, mulai dari Desktop, Tablet, hingga Smartphone.

## Cara Menjalankan Secara Lokal (Local Setup)

Proyek ini dibangun menggunakan teknologi dasar web tanpa memerlukan *package manager* (seperti npm) atau proses *build* tambahan. Proses instalasi dan menjalankannya sangat sederhana.

Berikut adalah panduan langkah demi langkah untuk menjalankan *source code* ini di perangkat Anda:

**1. Clone Repository**
Buka Terminal atau Command Prompt, arahkan ke direktori yang Anda inginkan, lalu jalankan perintah berikut untuk mengunduh kode:

```bash
git clone https://github.com/MaulanaFh/web-portfolio.git
```

**2. Buka Proyek di Text Editor**
Masuk ke dalam folder hasil *clone* dan buka proyek menggunakan Code Editor (sangat direkomendasikan menggunakan **Visual Studio Code**):

```bash
cd web-portfolio
code .
```

**3. Jalankan Menggunakan Live Server (Rekomendasi)**

Meskipun Anda bisa membuka file index.html secara langsung di browser, sangat disarankan untuk menjalankannya melalui local server agar fungsi JavaScript (seperti interaksi Modal dan ScrollSpy) berjalan dengan optimal tanpa terhalang kebijakan keamanan browser (CORS).

- Buka VS Code.

- Pastikan Anda sudah menginstal ekstensi Live Server (oleh Ritwick Dey).

- Buka file index.html.

- Klik kanan pada area penulisan kode, lalu pilih "Open with Live Server", atau klik tombol "Go Live" di bilah status pojok kanan bawah.

- Website portofolio akan otomatis terbuka di browser default Anda pada alamat http://127.0.0.1:5500.

## Author

**Muhammad Fiqih Maulana Hidayat**

Mahasiswa - [Universitas Brawijaya]

GitHub: [@MaulanaFh](https://github.com/MaulanaFh)

LinkedIn: [Muhammad Fiqih](https://www.linkedin.com/in/muhammad-fiqih-16291b37b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)