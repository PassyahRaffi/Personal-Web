const menuToggle = document.querySelector('.menu-toggle input');
// buat variabel const =
// untuk kita ambil isinya document.querySelector dari class menu-toggle yang isinya input
// querySelector digunakan ketika kita membuat animasinya di css


const nav = document.querySelector('nav ul');
// buat variabel const =
// untuk kita ambil isinya document.querySelector yang tagnya nav ul


// jika menu toggle ini diklik, jalankan function berikut ini
menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
    // ambil tag nav ambil classListnya ambil toggle
    // toggle artinya (jika ada classnya hilangkan) (jika tidak ada classnya tambahkan)
    // class yang ditambahkan class slide
});

// https://youtu.be/a6-v_0kjYyY (video ini rilis pada 18 Apr 2020)
// jika web sudah jadi tag pak dika di instagram buat video singkatnya