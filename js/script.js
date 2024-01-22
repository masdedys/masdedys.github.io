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
        '<div class="card col-sm-3 m-3"><img src="assets/jualan/' +
          data.gambar +
          '" width="18rem" class="card-img-top" alt="' +
          data.gambar +
          '"><div class="card-body"><h5 class="card-title">' +
          data.nama +
          "</h5><p>Rp." +
          data.harga +
          '</p><p style="font-size: 16px;"></p><a href="detail-jualan/' +
          data.detail +
          '" class="btn">Detail</a></div></div>'
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
          '<div class="card col-sm-3 m-3"><img src="assets/jualan/' +
          data.gambar +
          '" width="18rem" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' +
          data.nama +
          "</h5><p>Rp." +
          data.harga +
          '</p><p style="font-size: 16px;"></p><a href="detail-jualan/' +
          data.detail +
          '" class="btn">Detail</a></div></div>';
      }
    });

    $("#daftar-menu").html(content);
  });
});

//aos
AOS.init();
