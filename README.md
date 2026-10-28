# Kalkulator BMI (Body Mass Index) ⚖️

Aplikasi web kalkulator BMI interaktif, akurat, dan responsif dengan panduan kategori berat badan standar **World Health Organization (WHO)** dan **Kementerian Kesehatan RI**.

---

## 📋 Fitur Utama

1. **Dua Kolom Input**:
   - **Berat Badan (kg)**: Mendukung angka desimal, dilengkapi validasi rentang (10 – 350 kg).
   - **Tinggi Badan (cm)**: Mendukung angka desimal, dilengkapi validasi rentang (50 – 270 cm).

2. **Tombol 'Hitung BMI'**:
   - Menghitung nilai BMI secara instan dengan rumus:
     $$\text{BMI} = \frac{\text{Berat Badan (kg)}}{(\text{Tinggi Badan (m)})^2}$$
   - Mendukung eksekusi via tombol `Enter` pada keyboard.

3. **Hasil Perhitungan & Kategori Berat Badan**:
   - Nilai angka BMI akurat dengan 1 angka di belakang koma.
   - Badge kategori berat badan dengan warna indikator:
     - 🔵 **Kurus / Kurang**: $\text{BMI} < 18.5$
     - 🟢 **Normal / Ideal**: $18.5 \le \text{BMI} \le 24.9$
     - 🟠 **Kelebihan Berat Badan (Overweight)**: $25.0 \le \text{BMI} \le 29.9$
     - 🔴 **Obesitas**: $\text{BMI} \ge 30.0$
   - **Meteran Visual (Scale Bar & Pointer)** yang bergerak dinamis sesuai posisi skor BMI pengguna.
   - **Rentang Berat Badan Ideal**: Menghitung berat badan sehat yang direkomendasikan khusus untuk tinggi badan Anda.
   - **Tips & Catatan Sehat**: Saran gaya hidup praktis berdasarkan hasil kategori yang didapat.
   - **Tombol 'Hitung Ulang'**: Mereset form dengan satu klik.

---

## 📁 Struktur Berkas

- [index.html](file:///C:/Users/tatha/.gemini/antigravity/scratch/kalkulator-bmi/index.html) — Antarmuka web semantik dan ramah pengguna.
- [style.css](file:///C:/Users/tatha/.gemini/antigravity/scratch/kalkulator-bmi/style.css) — Desain modern bertema kesehatan & kebugaran dengan animasi meteran halus.
- [script.js](file:///C:/Users/tatha/.gemini/antigravity/scratch/kalkulator-bmi/script.js) — Algoritma perhitungan BMI, validasi input, interpolasi meteran, dan klasifikasi WHO.

---

## 🌐 Cara Menjalankan

Cukup klik ganda pada file [index.html](file:///C:/Users/tatha/.gemini/antigravity/scratch/kalkulator-bmi/index.html) untuk langsung menggunakannya di browser favorit Anda.
