$(document).ready(function () {
  // Tampilan awal Cover -> setelah di klik Tampil Detail Undangan
  $("#detailUndangan").hide();
  $("#navbar").hide();

  var audio = document.getElementById("musik");

  // Ketika musik selesai diputar
  audio.addEventListener("ended", function () {
    // Mengatur ulang posisi pemutaran ke awal
    audio.currentTime = 0;
    // Memainkan musik kembali
    audio.play();
  });

  // Ketika tombol "Buka Undangan" ditekan
  $("#bukaUndangan").click(function () {
    $("#cover").fadeOut("1000", function () {
      // Tampil Detail Undangan
      $("#detailUndangan").slideDown("1000");
      $("#navbar").slideDown("1000");
      // Memainkan Musik
      var audio = document.getElementById("musik");
      audio.play();
    });
  });
});
