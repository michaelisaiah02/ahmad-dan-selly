$(document).ready(function () {
  // Tampilan awal Cover -> setelah di klik Tampil Detail Undangan
  $("#detailUndangan").hide();
  $("#navbar").hide();
  $("#pauseplay").hide();

  // Ketika tombol "Buka Undangan" ditekan
  $("#bukaUndangan").click(function () {
    $("#cover").fadeOut("1000", function () {
      // Tampil Detail Undangan
      $("#detailUndangan").slideDown("1000");
      $("#navbar").slideDown("1000");
      // Memainkan Musik
      var audio = document.getElementById("musik");
      $("#pauseplay").slideDown();
      audio.play();
      // Menghapus latar belakang
      $("body").css("background-image", "none");
    });
  });

  // Mendapatkan referensi elemen-elemen ikon pada navbar
  const mempelaiIcon = $(".fa-user");
  const acaraIcon = $(".fa-calendar-alt");
  const galleryIcon = $(".fa-images");
  const timerIcon = $(".fa-stopwatch");

  // Mendapatkan referensi elemen-elemen section
  const mempelaiSection = $("#home");
  const acaraSection = $("#acara");
  const gallerySection = $("#gallery");
  const timerSection = $("#timer");

  // Fungsi untuk menambahkan atau menghapus kelas "fa-beat-fade"
  function toggleIconAnimation(section, icon) {
    const sectionTop = section.offset().top;
    const sectionBottom = sectionTop + section.outerHeight();
    const scrollPosition = $(window).scrollTop();

    if (scrollPosition + 200 >= sectionTop && scrollPosition < sectionBottom) {
      icon.addClass("fa-beat-fade");
    } else {
      icon.removeClass("fa-beat-fade");
    }
  }

  // Menambahkan event listener untuk scroll
  $(window).scroll(function () {
    toggleIconAnimation(mempelaiSection, mempelaiIcon);
    toggleIconAnimation(acaraSection, acaraIcon);
    toggleIconAnimation(gallerySection, galleryIcon);
    toggleIconAnimation(timerSection, timerIcon);
  });

  // Pemanggilan awal untuk menambahkan kelas "fa-beat-fade"
  toggleIconAnimation(mempelaiSection, mempelaiIcon);
  toggleIconAnimation(acaraSection, acaraIcon);
  toggleIconAnimation(gallerySection, galleryIcon);
  toggleIconAnimation(timerSection, timerIcon);

  // Trigger event scroll saat halaman pertama kali dimuat
  $(window).trigger("scroll");

  var audio = document.getElementById("musik");
  // Ketika musik selesai diputar
  audio.addEventListener("ended", function () {
    // Mengatur ulang posisi pemutaran ke awal
    audio.currentTime = 0;
    // Memainkan musik kembali
    audio.play();
  });

  // Daftar gambar
  var images = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
    "img/9.jpg",
    "img/10.jpg",
    "img/11.jpg",
    "img/12.jpg",
    "img/13.jpg",
    "img/14.jpg",
    "img/15.jpg",
    "img/16.jpg",
    "img/17.jpg",
    "img/18.jpg",
    "img/19.jpg",
    "img/21.jpg",
    "img/22.jpg",
    "img/23.jpg",
    "img/24.jpg",
    "img/25.jpg",
    "img/26.jpg",
    "img/27.jpg",
    "img/28.jpg",
    "img/29.jpg",
    "img/30.jpg",
    "img/31.jpg",
    "img/32.jpg",
    "img/33.jpg",
    "img/34.jpg",
    "img/35.jpg",
    // Daftar gambar lainnya...
  ];

  // Ambil elemen container
  var imageContainer = $(".image-container");

  // Loop melalui daftar gambar
  images.forEach(function (image) {
    // Buat elemen link baru
    var link = $("<a>").addClass("image-link");

    // Buat elemen gambar
    var prewed = $("<img>").addClass("img-thumbnail").attr("src", image).attr("alt", "Image");

    // Tambahkan elemen gambar ke dalam link
    link.append(prewed);

    // Tambahkan col ke dalam container
    imageContainer.append(link);
  });

  // Perbesar Gambar saat diklik
  $(".image-link").click(function (e) {
    e.preventDefault();
    var imageSrc = $(this).find("img").attr("src");
    $("#modalImage").attr("src", imageSrc);
    $("#fotoModal").modal("show");
  });

  // Tombol Play Pause Musik
  var audioPlayer = $("#musik")[0];
  var pauseplay = $("#pauseplay");

  pauseplay.click(function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
      pauseplay.html("<i class='bi bi-pause-fill'></i>");
    } else {
      audioPlayer.pause();
      pauseplay.html("<i class='bi bi-play-fill'></i>");
    }
  });

  // Tanggal dan waktu tujuan countdown (misal: 31 Desember 2023 pukul 00:00:00)
  var countDownDate = new Date("Jul 2, 2023 09:00:00").getTime();

  // Memperbarui countdown setiap detik
  var countdown = setInterval(function () {
    // Waktu saat ini
    var now = new Date().getTime();

    // Selisih waktu antara sekarang dan waktu tujuan countdown
    var timeRemaining = countDownDate - now;

    // Menghitung jumlah hari, jam, menit, dan detik
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Memperbarui elemen HTML dengan nilai countdown
    $("#hari p").text(days);
    $("#jam p").text(hours);
    $("#menit p").text(minutes);
    $("#detik p").text(seconds);

    // Menghentikan countdown jika waktu tujuan sudah tercapai
    if (timeRemaining < 0) {
      clearInterval(countdown);
      $("#waktu").html("<p class='fs-1'>Waktu tunggu telah selesai!</p>");
    }
  }, 1000);
});
