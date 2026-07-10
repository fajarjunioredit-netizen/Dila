// Sembunyikan bunga saat pertama kali
document.querySelector(".container").style.display = "none";

// Saat tombol diklik
document.getElementById("startBtn").onclick = function () {
    document.getElementById("intro").style.display = "none";
    document.querySelector(".container").style.display = "block";
};
