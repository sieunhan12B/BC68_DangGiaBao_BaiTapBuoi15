//Bài tập quản lý tuyển sinh
//sơ đồ 3 khối
/**
 *Đầu vào: điểm chuẩn hội đồng,điểm khu vực,điểm đối tượng, điểm ưu tiên,điểm 1,2,3



 Các bước xử lý :
 =>công thức tính tổng điểm =điểm 1+điểm 2+điểm 3+điểm ưu tiên
 =>điểm ưu tiên=điểm khu vực +điểm đối tượng



 Đầu ra :tổng điểm và kết  quả xét tuyển 
 */
document.getElementById("btnKetQuaTuyenSinh").onclick = function () {
  let hienThi = document.querySelector(".ketquatuyensinh");
  let diemChuan = document.getElementById("diemchuan").value * 1;
  let diemKhuVuc = document.getElementById("khuvuc").value * 1;
  let diemDoiTuong = document.getElementById("doituong").value * 1;
  let diemUuTien = diemDoiTuong + diemKhuVuc;

  let diem1 = document.getElementById("diem1").value * 1;
  let diem2 = document.getElementById("diem2").value * 1;
  let diem3 = document.getElementById("diem3").value * 1;

  if (diemChuan < 0) {
    diemChuan = 0;
  }
  if (diem1 < 0) {
    diem1 = 0;
  }
  if (diem2 < 0) {
    diem2 = 0;
  }
  if (diem3 < 0) {
    diem3 = 0;
  }
  let tong = diem1 + diem2 + diem3 + diemUuTien;
  if (tong < diemChuan || diem1 == 0 || diem2 == 0 || diem3 == 0) {
    hienThi.innerHTML = `Điểm của bạn là: ${tong} Kết quả: Rớt`;
  } else {
    hienThi.innerHTML = `Điểm của bạn là: ${tong} Kết quả: Đậu`;
  }
};

// TÍNH TIỀN ĐIỆN
//sơ đồ 3 khối
/**
 *Đầu vào: số kw,họ tên



 Các bước xử lý :
 công thức tính tiền điện :
 =>nếu số kw<=50, tiền điện=số kw*500;
 =>nếu số kw<=100, tiền điện=số 50*500+(số kw-50)*650;
...

 Đầu ra :họ tên và tiền điện
 */
const tinhTienDien = (soKw) => {
  if (soKw <= 50) {
    return soKw * 500;
  } else if (soKw <= 100) {
    return 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 200) {
    return 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw <= 350) {
    return 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    return 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }
};
document.querySelector(".btntinhtiendien").onclick = function () {
  let hienThi = document.querySelector(".ketquatinhtiendien");
  let hoTen = document.getElementById("hoten").value;
  let soKw = document.getElementById("sokw").value * 1;
  if (soKw < 0) {
    soKw = 0;
  }
  let tinhTien = tinhTienDien(soKw);
  console.log(hoTen);
  console.log(soKw);
  console.log(tinhTien);
  hienThi.innerHTML = `Họ tên: ${hoTen} Tiền điện: ${tinhTien}`;
};

// TÍNH THUẾ
//sơ đồ 3 khối
/**
 *Đầu vào: họ tên, tổng thu nhập năm,số người phụ thuộc



 Các bước xử lý :
=>thu nhập chịu thuế=tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
  tiền thuế thu nhập cá nhân :
=>nếu số thu nhập chịu thuế<=60, tiền thuế=thu nhập chịu thuế *0.05;
=>nếu số thu nhập chịu thuế<=120, tiền thuế=thu nhập chịu thuế *0.1;
...
...

 Đầu ra :họ tên và tiền thuế thu nhập cá nhân
 */
const tinhThue = (thuNhapChiuThue) => {
  if (thuNhapChiuThue <= 60) {
    return thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120) {
    return 60 * 0.05 + (thuNhapChiuThue - 60) * 0.1;
  } else if (thuNhapChiuThue <= 210) {
    return 60 * 0.05 + 60 * 0.1 + (thuNhapChiuThue - 120) * 0.15;
  } else if (thuNhapChiuThue <= 384) {
    return 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.2;
  } else if (thuNhapChiuThue <= 624) {
    return (
      60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2(thuNhapChiuThue - 384) * 0.25
    );
  } else if (thuNhapChiuThue <= 960) {
    return (
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      240 * 0.25 +
      (thuNhapChiuThue - 624) * 0.3
    );
  } else {
    return (
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      240 * 0.25 +
      336 * 0.3 +
      (thuNhapChiuThue - 960) * 0.35
    );
  }
};
document.querySelector(".btntinhthue").onclick = function () {
  let hienThi = document.querySelector(".ketquatinhthue");
  let hoTen = document.getElementById("hoTenThue").value;
  let tongThuNhapNam = document.getElementById("thunhapnam").value * 1;
  let soNguoiPhuThuoc = document.getElementById("songuoiphuthuoc").value * 1;
  let thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
  if (soNguoiPhuThuoc < 0) {
    soNguoiPhuThuoc = 0;
  }
  if (tongThuNhapNam < 0) {
    tongThuNhapNam = 0;
  }
  let tinhTien = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(tinhThue(thuNhapChiuThue));
  hienThi.innerHTML = `Họ tên : ${hoTen}; Tiền thuế thu nhập cá nhân : ${tinhTien}`;
};

// TÍNH TIỀN CÁP
//sơ đồ 3 khối
/**
 *Đầu vào: loại khách,mã khách,số kênh,số kết nối



 Các bước xử lý :
 ==> tính tiền cáp cho nhà dân=Phí xử lý hóa đơn+Phí dịch vụ cơ bản+Thuê kênh cao cấp*sokenh
 ==>tính tiền cáp cho doanh nghiệp=Phí xử lý hóa đơn+Phí dịch vụ cơ bản+Thuê kênh cao cấp*sokenh

 Đầu ra :mã khách hàng và tiền caps
 */
const loaiKhachHangSelect = document.getElementById("loaikhachhang");
const soKetNoiInput = document.getElementById("soketnoi");

loaiKhachHangSelect.addEventListener("change", function () {
  if (loaiKhachHangSelect.value === "NhaDan") {
    // Nếu chọn "Nhà Dân", ẩn trường nhập số kết nối
    soKetNoiInput.style.display = "none";
  } else {
    // Ngược lại, hiển thị trường nhập số kết nối
    soKetNoiInput.style.display = "block";
  }
});
const tinhTienCapNhaDan = (soKenh) => {
  return 7.5 * soKenh + 20.5 + 4.5;
};
const tinhTienCapDoanhNghiep = (soKenh, soKetNoi) => {
  if (soKetNoi <= 10) {
    return 50 * soKenh + 75 + 15;
  } else {
    return 50 * soKenh + 75 + (soKetNoi - 10) * 5 + 15;
  }
};
document.querySelector(".btntinhtiencap").onclick = function () {
  let hienThi = document.querySelector(".ketquatinhtiencap");
  let loaiKhach = loaiKhachHangSelect.value;
  let maKhach = document.getElementById("makhachhang").value;
  let soKenh = document.getElementById("sokenhcaocap").value * 1;
  let soKetNoi = document.getElementById("soketnoi").value * 1;
  if (soKenh < 0) {
    soKenh = 0;
  }
  if (soKetNoi < 0) {
    soKetNoi = 0;
  }
  if (loaiKhach === "NhaDan") {
    let tienCapNhaDan = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(tinhTienCapNhaDan(soKenh));
    hienThi.innerHTML = `Mã khách hàng: ${maKhach} Tiền cáp: ${tienCapNhaDan}`;
  } else {
    let tienCapDoanhNghiep = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(tinhTienCapDoanhNghiep(soKenh, soKetNoi));
    hienThi.innerHTML = `Mã khách hàng: ${maKhach} Tiền cáp: ${tienCapDoanhNghiep}`;
  }
};
// let tinhTien = new Intl.NumberFormat("vi-VN", {
//   style: "currency",
//   currency: "VND",
// }).format(tinhThue(thuNhapChiuThue));
