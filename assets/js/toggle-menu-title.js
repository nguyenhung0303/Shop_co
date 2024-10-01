function toggleItems(itemId, element) {
    const shopItems = document.getElementById('shopItems');
    const categoryItems = document.getElementById('categoryItems');
    const underline = document.getElementById('underline');
    const shopButton = document.querySelector('.toggle-title-item');
    const categoryButton = document.querySelector('.toggle-title-item-t');

    // Ẩn tất cả các mục trước khi hiện mục mới
    shopItems.classList.remove('showw');
    categoryItems.classList.remove('showw');

    // Đợi một chút trước khi hiển thị mục được chọn
    setTimeout(() => {
        const selectedItems = document.getElementById(itemId);
        selectedItems.classList.toggle('showw');
    }, 300); // Thời gian chờ trước khi hiển thị mục mới

    // Di chuyển đường kẻ
    const selectedIndex = Array.from(element.parentNode.children).indexOf(element);
    underline.style.left = `${selectedIndex * 50}%`; // Di chuyển đường kẻ

    // Xóa lớp activee khỏi cả hai thẻ và thêm vào thẻ được nhấn
    shopButton.classList.remove('activee');
    categoryButton.classList.remove('activee');
    element.classList.add('activee');
}

// Di chuyển đường kẻ đến vị trí của thẻ đầu tiên khi tải trang
window.onload = function() {
    document.getElementById('underline').style.left = '0'; // Đường kẻ ở vị trí thẻ đầu tiên
    document.querySelector('.toggle-title-item').classList.add('activee'); // Thêm lớp activee cho thẻ đầu tiên
};