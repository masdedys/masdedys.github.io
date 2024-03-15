//fancybox
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

//masdedyshop page
function TampilkanSemuaProduk() {
  $.getJSON("js/listjualan.json", function (data) {
    //console.log(data);
    let produk = data.produk;
    //console.log(menu);
    $("#daftar-produk").empty();
    $.each(produk, function (i, data) {
      // console.log(data);
      $("#daftar-produk").append(
        '<div class="card col-sm-3 m-3"><img src="assets/jualan/' +
          data.gambar +
          '" width="18rem" class="card-img-top" alt="gambar ' +
          data.nama +
          '"><div class="card-body"><h5 class="card-title">' +
          data.nama +
          "</h5><p>Rp." +
          data.harga +
          '</p><p style="font-size: 16px;"></p><a href="#" class="btn" class="btn" data-bs-toggle="modal" data-bs-target="#hubungikamidiig">Beli</a></div></div>'
      );
    });
  });
}

TampilkanSemuaProduk();

$(".produk-kategori").on("click", function () {
  $(".produk-kategori").removeClass("active");
  $(this).addClass("active");

  let category = $(this).html();
  //   console.log(category);
  $("h1").html(category);

  if (category == "All Product") {
    TampilkanSemuaProduk();
    return;
  }

  $.getJSON("js/listjualan.json", function (data) {
    let produk = data.produk;
    let content = "";

    $.each(produk, function (i, data) {
      if (data.kategori == category.toLowerCase()) {
        content +=
          '<div class="card col-sm-3 m-3"><img src="assets/jualan/' +
          data.gambar +
          '" width="18rem" class="card-img-top" alt="gambar ' +
          data.nama +
          '"><div class="card-body"><h5 class="card-title">' +
          data.nama +
          "</h5><p>Rp." +
          data.harga +
          '</p><p style="font-size: 16px;"></p><a href="#" class="btn" data-bs-toggle="modal" data-bs-target="#hubungikamidiig">Beli</a></div></div>';
      }
    });

    $("#daftar-produk").html(content);
  });
});

//movie page
$.getJSON("../js/listfilm.json", function (data) {
  let DaftarFilm = data.DaftarFilm;
  let content = "";
  let contents = "";

  $.each(DaftarFilm, function (i, data) {
    if (data.detail == "awesome") {
      content +=
        '<div class="card col-sm-3 m-3"><img src="../assets/film/' +
        data.gambar +
        '" width="18rem" class="card-img-top" alt="gambar ' +
        data.judul +
        '"><div class="card-body"><h5 class="card-title">' +
        data.judul +
        "</h5><p>" +
        data.harga +
        '</p><p style="font-size: 16px;"></p><a href="#" class="btn" data-bs-toggle="modal" data-bs-target="#hubungikamidiig">Beli</a></div></div>';
    }
  });

  $.each(DaftarFilm, function (i, data) {
    if (data.detail == "newentry") {
      contents +=
        '<div class="card col-sm-3 m-3"><img src="../assets/film/' +
        data.gambar +
        '" width="18rem" class="card-img-top" alt="gambar ' +
        data.judul +
        '"><div class="card-body"><h5 class="card-title">' +
        data.judul +
        "</h5><p>" +
        data.harga +
        '</p><p style="font-size: 16px;"></p><a href="#" class="btn" data-bs-toggle="modal" data-bs-target="#hubungikamidiig">Beli</a></div></div>';
    }
  });

  $("#daftar-film").html(content);
  $("#daftar-film-baru").html(contents);
});

//Datatables search movie
$(document).ready(function () {
  var xmlhttp = new XMLHttpRequest();
  var url = "js/listfilm.json";
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log(data);
      $("#table-demo").DataTable({
        // "ajax":data/object.txt,
        data: data.DaftarFilm,
        columns: [
          { data: "judul" },
          { data: "genre" },
          { data: "harga" },
          //{"defaultContent": "<button data-bs-toggle="modal" data-bs-target="#hubungikamidiig">Get File</button>"}
        ],
        lengthMenu: [
          [5, 25, 50, -1],
          [5, 25, 50, "All"],
        ],
        dom: "Bfrtip",
        buttons: [],
      });
    }
  };
});
//aos
AOS.init();
