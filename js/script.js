//fancybox
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

function TampilkanSemuaMenu() {
  $.getJSON("js/listjualan.json", function (data) {
    //console.log(data);
    let menu = data.menu;
    //console.log(menu);
    $.each(menu, function (i, data) {
      // console.log(data);
      $("#daftar-menu").append(
        '<div class="card w-96 bg-base-100 shadow-xl py-5" data-aos="flip-left"><a href="assets/jualan/' +
          data.gambar +
          '" data-fancybox="gallery" data-caption="Photoshop - Digital Imaging"><figure><img src="assets/jualan/' +
          data.gambar +
          '" width="70%" height="70%" class="rounded-xl" alt="Shoes" /></figure></a><div class="card-body"><h4 class="card-title items-center text-center">' +
          data.nama +
          '</h4><h2>Harga : 50k</h2><a href="detail-jualan/' +
          data.detail +
          '" class="link">Detail</a><div class="card-actions justify-end"><button class="btn btn-primary" onclick="my_modal_1.showModal()">Beli</button><dialog id="my_modal_1" class="modal"><form method="dialog" class="modal-box"><h3 class="font-bold text-lg">Hello!</h3><p class="py-4">Mohon maaf atas ketidaknyamanannya, pemesanan masih dilakukan secara manual. Kamu bisa DM saya di Instagram saya di mas_dedys. Atau klik tombol ini, <br /><br /><button class="btn btn-primary"><a href="https://www.instagram.com/mas_dedys/" target="_blank"><i class="bi bi-instagram" style="font-size: 25px"></i></a></button></p><div class="modal-action"><!-- if there is a button in form, it will close the modal --><button class="btn">Close</button></div></form></dialog></div></div></div>'
      );
    });
  });
}

TampilkanSemuaMenu();

$(".menu-info").on("click", function () {
  $(".menu-info").removeClass("active");
  $(this).addClass("active");

  let category = $(this).html();
  //   console.log(category);
  $("h1").html(category);

  if (category == "All Product") {
    TampilkanSemuaMenu();
    return;
  }

  $.getJSON("js/listjualan.json", function (data) {
    let menu = data.menu;
    let content = "";

    $.each(menu, function (i, data) {
      if (data.kategori == category.toLowerCase()) {
        content +=
          '<div class="card w-96 bg-base-100 shadow-xl py-5" data-aos="flip-left"><a href="assets/jualan/' +
          data.gambar +
          '" data-fancybox="gallery" data-caption="Photoshop - Digital Imaging"><figure><img src="assets/jualan/' +
          data.gambar +
          '" width="70%" height="70%" class="rounded-xl" alt="Shoes" /></figure></a><div class="card-body"><h4 class="card-title items-center text-center">' +
          data.nama +
          '</h4><h2>Harga : 50k</h2><a href="detail-jualan/' +
          data.detail +
          '" class="link">Detail</a><div class="card-actions justify-end"><button class="btn btn-primary" onclick="my_modal_1.showModal()">Beli</button><dialog id="my_modal_1" class="modal"><form method="dialog" class="modal-box"><h3 class="font-bold text-lg">Hello!</h3><p class="py-4">Mohon maaf atas ketidaknyamanannya, pemesanan masih dilakukan secara manual. Kamu bisa DM saya di Instagram saya di mas_dedys. Atau klik tombol ini, <br /><br /><button class="btn btn-primary"><a href="https://www.instagram.com/mas_dedys/" target="_blank"><i class="bi bi-instagram" style="font-size: 25px"></i></a></button></p><div class="modal-action"><!-- if there is a button in form, it will close the modal --><button class="btn">Close</button></div></form></dialog></div></div></div>';
      }
    });

    $("#daftar-menu").html(content);
  });
});

//aos
AOS.init();
