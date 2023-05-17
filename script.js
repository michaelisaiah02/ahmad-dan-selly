$(document).ready(function () {
  // Tampilan awal Cover -> setelah di klik Tampil Detail Undangan
  $("#detailUndangan").hide();
  $("#navbar").hide();

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
