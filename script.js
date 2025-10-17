// Ví dụ hiệu ứng nhỏ cho liên kết mua hàng
document.querySelectorAll(".product a").forEach(link => {
  link.addEventListener("click", () => {
    alert("Cảm ơn bạn đã ủng hộ! Liên kết sẽ mở ra ngay 🎉");
  });
});
