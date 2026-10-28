/* =========================================================
   KALKULATOR BMI - LOGIKA PERHITUNGAN & INTERAKSI
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');
  const calculateBtn = document.getElementById('calculateBtn');
  const resetBtn = document.getElementById('resetBtn');
  const resultSection = document.getElementById('resultSection');

  // Result display elements
  const bmiScoreEl = document.getElementById('bmiScore');
  const bmiCategoryEl = document.getElementById('bmiCategory');
  const scalePointer = document.getElementById('scalePointer');
  const idealWeightRangeEl = document.getElementById('idealWeightRange');
  const healthTipEl = document.getElementById('healthTip');

  // Form groups
  const weightGroup = weightInput.closest('.form-group');
  const heightGroup = heightInput.closest('.form-group');

  // 1. Fungsi Validasi Input
  function validateInputs() {
    let isValid = true;
    const weightVal = parseFloat(weightInput.value);
    const heightVal = parseFloat(heightInput.value);

    // Validasi Berat Badan (10 - 350 kg)
    if (isNaN(weightVal) || weightVal < 10 || weightVal > 350) {
      weightGroup.classList.add('has-error');
      isValid = false;
    } else {
      weightGroup.classList.remove('has-error');
    }

    // Validasi Tinggi Badan (50 - 270 cm)
    if (isNaN(heightVal) || heightVal < 50 || heightVal > 270) {
      heightGroup.classList.add('has-error');
      isValid = false;
    } else {
      heightGroup.classList.remove('has-error');
    }

    return isValid;
  }

  // Bersihkan error saat pengguna mengetik kembali
  weightInput.addEventListener('input', () => weightGroup.classList.remove('has-error'));
  heightInput.addEventListener('input', () => heightGroup.classList.remove('has-error'));

  // 2. Fungsi Hitung BMI
  function calculateBMI() {
    if (!validateInputs()) {
      resultSection.classList.remove('show');
      return;
    }

    const weight = parseFloat(weightInput.value);
    const heightCm = parseFloat(heightInput.value);
    const heightM = heightCm / 100;

    // Rumus BMI: Berat (kg) / (Tinggi (m) * Tinggi (m))
    const bmi = weight / (heightM * heightM);
    const roundedBMI = bmi.toFixed(1);

    // Tentukan Kategori & Rekomendasi
    let categoryName = '';
    let categoryClass = '';
    let healthTip = '';
    let pointerPercentage = 0;

    if (bmi < 18.5) {
      categoryName = 'Berat Badan Kurang (Kurus)';
      categoryClass = 'cat-underweight';
      healthTip = 'Disarankan untuk meningkatkan asupan nutrisi seimbang, konsumsi protein berkualitas, dan latihan beban untuk menambah massa otot sehat.';
      // Interpolasi pointer: 10 - 18.5 -> 3% s/d 25%
      const normalized = Math.max(0, (bmi - 10) / (18.5 - 10));
      pointerPercentage = 3 + normalized * 22;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      categoryName = 'Berat Badan Normal (Ideal)';
      categoryClass = 'cat-normal';
      healthTip = 'Luar biasa! Berat badan Anda berada pada rentang ideal. Pertahankan pola makan bergizi dan rutin berolahraga untuk menjaga kebugaran tubuh.';
      // Interpolasi pointer: 18.5 - 24.9 -> 25% s/d 55%
      const normalized = (bmi - 18.5) / (24.9 - 18.5);
      pointerPercentage = 25 + normalized * 30;
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      categoryName = 'Kelebihan Berat Badan (Overweight)';
      categoryClass = 'cat-overweight';
      healthTip = 'Disarankan untuk mengontrol porsi makan harian, membatasi gula & gorengan, serta rutin berolahraga kardio minimal 150 menit per minggu.';
      // Interpolasi pointer: 25.0 - 29.9 -> 55% s/d 75%
      const normalized = (bmi - 25.0) / (29.9 - 25.0);
      pointerPercentage = 55 + normalized * 20;
    } else {
      categoryName = 'Obesitas';
      categoryClass = 'cat-obese';
      healthTip = 'Sangat disarankan untuk berkonsultasi dengan tenaga medis atau dokter/ahli gizi guna menyusun strategi penurunan berat badan yang aman dan berkelanjutan.';
      // Interpolasi pointer: 30.0 - 40.0 -> 75% s/d 97%
      const normalized = Math.min(1, (bmi - 30.0) / (40.0 - 30.0));
      pointerPercentage = 75 + normalized * 22;
    }

    // Hitung Rentang Berat Badan Ideal untuk tinggi badan ini
    const minIdealWeight = (18.5 * heightM * heightM).toFixed(1);
    const maxIdealWeight = (24.9 * heightM * heightM).toFixed(1);

    // Tampilkan Hasil ke Tampilan (DOM)
    bmiScoreEl.textContent = roundedBMI;
    bmiCategoryEl.textContent = categoryName;

    // Reset kelas warna kategori & pasang yang baru
    bmiCategoryEl.className = 'category-badge ' + categoryClass;

    // Geser pointer meteran visual
    scalePointer.style.left = `${Math.min(97, Math.max(3, pointerPercentage))}%`;

    // Pasang detail info
    idealWeightRangeEl.textContent = `${minIdealWeight} kg – ${maxIdealWeight} kg`;
    healthTipEl.textContent = healthTip;

    // Munculkan bagian hasil dengan animasi
    resultSection.classList.add('show');

    // Scroll halus ke arah hasil jika di layar kecil
    setTimeout(() => {
      resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }

  // 3. Event Listener Klik Tombol 'Hitung BMI'
  calculateBtn.addEventListener('click', calculateBMI);

  // Jalankan perhitungan saat tombol 'Enter' ditekan pada input
  weightInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculateBMI();
  });
  heightInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculateBMI();
  });

  // 4. Tombol Reset / Hitung Ulang
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      weightInput.value = '';
      heightInput.value = '';
      weightGroup.classList.remove('has-error');
      heightGroup.classList.remove('has-error');
      resultSection.classList.remove('show');
      weightInput.focus();
    });
  }
});
