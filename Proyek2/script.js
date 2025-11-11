// Tunggu hingga seluruh dokumen HTML dimuat
document.addEventListener("DOMContentLoaded", function() {
  
  // Ambil elemen navbar
  const navbar = document.querySelector('.navbar');
  
  // Jika navbar tidak ditemukan, hentikan eksekusi
  if (!navbar) return;

  // Dapatkan tinggi navbar, kita pakai ini agar navbar
  // tidak langsung hilang saat baru scroll sedikit
  const navbarHeight = navbar.offsetHeight;
  
  // Simpan posisi scroll terakhir
  let lastScrollTop = 0;

  // Dengarkan event 'scroll' pada window
  window.addEventListener("scroll", function() {
    
    // Dapatkan posisi scroll vertikal saat ini
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Cek arah scroll
    if (currentScroll > lastScrollTop && currentScroll > navbarHeight) {
      // --- SCROLL KE BAWAH ---
      // dan sudah melewati tinggi navbar
      navbar.classList.add("navbar-hidden");
    } else {
      // --- SCROLL KE ATAS ---
      // atau masih berada di area paling atas (kurang dari navbarHeight)
      navbar.classList.remove("navbar-hidden");
    }

    // Perbarui posisi scroll terakhir
    // 'currentScroll <= 0 ? 0 : currentScroll' 
    // adalah untuk menangani scroll di iOS (elastic scrolling)
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    
  }, false);

});