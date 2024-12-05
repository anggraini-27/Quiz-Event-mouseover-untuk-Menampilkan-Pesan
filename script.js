// Ambil elemen tombol dan paragraf
const button = document.getElementById('hoverButton');
const paragraph = document.getElementById('messageParagraph');

// Tambahkan event listener untuk mouseover pada tombol
button.addEventListener('mouseover', function() {
    // Tampilkan pesan di dalam paragraf
    paragraph.textContent = 'Mouse is over the button!';
});
