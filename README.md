# ClarifAI

## Deskripsi

ClarifAI adalah aplikasi web berbasis Artificial Intelligence yang dirancang untuk membantu masyarakat dalam mengidentifikasi informasi hoaks terkait COVID-19. Sistem ini memanfaatkan teknologi Natural Language Processing (NLP) dan Machine Learning untuk melakukan klasifikasi teks menjadi kategori Fakta atau Hoaks.

Selain menampilkan hasil klasifikasi, ClarifAI juga menyediakan penjelasan berbasis Explainable AI sehingga pengguna dapat memahami alasan di balik hasil prediksi yang diberikan oleh sistem. Fitur edukasi juga disediakan untuk meningkatkan literasi digital masyarakat dalam mengenali dan mencegah penyebaran informasi palsu terkait kesehatan.

Tujuan utama ClarifAI adalah membantu pengguna melakukan verifikasi informasi secara cepat, mudah, dan terpercaya sebelum menyebarkan informasi kepada orang lain.

---

## Teknologi yang Digunakan

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js
* Axios

### Artificial Intelligence Service

* FastAPI
* Python
* TensorFlow / Scikit-Learn
* Natural Language Processing (NLP)

### Database & Authentication

* Firebase Authentication
* Firebase Firestore

---

## Prasyarat

Sebelum memulai, pastikan telah menginstal:

* Node.js dan npm
* Python 3.10+
* Git

---

## Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/vannesha2/Capstonee-clarifai.git
```

Masuk ke direktori proyek:

```bash
cd Capstonee-clarifai
```

---

### 2. Instal Dependensi Frontend

```bash
cd frontend
npm install
```

---

### 3. Instal Dependensi Backend

```bash
cd ../backend
npm install
```

---

### 4. Instal Dependensi AI Service

```bash
cd ../ai-service

pip install -r requirements.txt
```

---

## Menjalankan Aplikasi

### Menjalankan AI Service

```bash
cd ai-service

uvicorn main:app --reload
```

AI Service akan berjalan pada:

```text
http://localhost:8000
```

---

### Menjalankan Backend

```bash
cd backend

npm start
```

Backend akan berjalan pada:

```text
http://localhost:3000
```

---

### Menjalankan Frontend

```bash
cd frontend

npm run dev
```

Frontend akan berjalan pada:

```text
http://localhost:5173
```

---

## Deployment

### Frontend

* Vercel

### Backend

* Railway

### AI Service

* Railway

---

## Fitur Utama

* Deteksi hoaks COVID-19 berbasis AI
* Explainable AI untuk menjelaskan hasil prediksi
* Login dan Registrasi pengguna
* Reset Password
* Riwayat hasil analisis
* Edukasi dan literasi digital terkait COVID-19
* Antarmuka responsif dan ramah pengguna

---

## Struktur Proyek

```text
Capstonee-clarifai/
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── ai-service/
│   ├── main.py
│   ├── model/
│   ├── requirements.txt
│   └── dataset/
│
└── README.md
```

---

## Pengembang

Tim Capstone Coding Camp - ClarifAI

---

## Lisensi

Proyek ini dikembangkan untuk keperluan pembelajaran dan penyelesaian Capstone Project Coding Camp.
