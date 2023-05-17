$(document).ready(function () {
  // Tampilan awal Cover -> setelah di klik Tampil Detail Undangan
  $("#cover").show();
  $("#detailUndangan").hide();
  $("#bukaUndangan").click(function () {
    $("#cover").hide();
    $("#detailUndangan").show();
  });

  $("#konfirmasi").click(function () {
    alert("Terima kasih atas konfirmasi kehadiran Anda!");
  });
});
