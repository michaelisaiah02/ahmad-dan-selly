$(document).ready(function () {
  // Tampilan awal Cover -> setelah di klik Tampil Detail Undangan
  $("#detailUndangan").hide();
  $("#navbar").hide();

  $("#bukaUndangan").click(function () {
    $("#cover").fadeOut("1000", function () {
      $("#detailUndangan").slideDown("1000");
      $("#navbar").slideDown("1000");
    });
  });
});
