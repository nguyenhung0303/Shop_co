// const messages = [
//     '<p>Sign up and get 20% off your first order. <span>Sign Up Now</span></p>',
//     '<p>Receive exclusive updates and offers! <span>Join Us Today</span></p>',
//     '<p>Get the latest news straight to your inbox! <span>Subscribe Now</span></p>'
// ];
// let currentIndex = 0;

// function updateMessage() {
//     const messageElement = document.getElementById('announcementText');
    
    
//     messageElement.style.transform = 'translateX(-100%)'; 
    
   
//     setTimeout(() => {
//         currentIndex = (currentIndex + 1) % messages.length; 
//         messageElement.innerHTML = messages[currentIndex];

//         messageElement.style.transform = 'translateX(100%)'; 
        
   
//         setTimeout(() => {
//             messageElement.style.transform = 'translateX(0)'; 
//         }, 50);
//     }, 500); 
// }


// setInterval(updateMessage, 5000); 

// -------------------------------------------------------
const toggleDiv = document.getElementById("toggleDiv");
const overlay = document.getElementById("overlay");
const background = document.getElementById("background");

// Hiện overlay và làm tối phần tử bên dưới
toggleDiv.addEventListener("click", function(event) {
    overlay.classList.add("active");
    background.style.display = "block"; // Hiện thẻ div che phủ
    event.stopPropagation(); // Ngăn chặn sự kiện click từ lan ra bên ngoài
});

// Ẩn overlay và làm sáng phần tử bên dưới khi nhấn vào background
background.addEventListener("click", function() {
    overlay.classList.remove("active");
    background.style.display = "none"; // Ẩn thẻ div che phủ
});
// toggle  sub menu
        // Lấy tất cả các mục toggle-item
        const toggleItems = document.querySelectorAll('.toggle-item');

        // Lặp qua từng mục và thêm sự kiện click
        toggleItems.forEach(item => {
            item.querySelector('.toggle-icon').addEventListener('click', function(e) {
                e.preventDefault();  // Ngăn chặn hành động mặc định của thẻ a
                item.classList.toggle('active');
            });
        });

// toggle menu title

function moveUnderline(element) {
    const underline = document.querySelector('.underline');
    const menuItems = document.getElementById('menuItems');
    const categoryItems = document.getElementById('categoryItems');

    // Cập nhật vị trí của đường gạch chân
    underline.style.width = `${element.offsetWidth}px`;
    underline.style.left = `${element.offsetLeft}px`;

    // Ẩn và hiển thị các mục tương ứng
    if (element.innerText === "MENU") {
        categoryItems.classList.remove('show');
        menuItems.classList.add('show');
    } else {
        menuItems.classList.remove('show');
        categoryItems.classList.add('show');
    }

    // Thay đổi màu sắc mục đã chọn
    const allItems = document.querySelectorAll('.toggle-title-item');
    allItems.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}

// Thiết lập vị trí ban đầu cho đường gạch chân
document.addEventListener('DOMContentLoaded', () => {
    const initialItem = document.querySelector('.toggle-title-item');
    moveUnderline(initialItem);
    document.getElementById('menuItems').classList.add('show');
});
// -------------------------------------------------- search icon click

const image = document.getElementById('openYellowPage'); // Sử dụng id để chọn hình ảnh
const yellowPage = document.querySelector('.yellow-page');
const overlayone = document.querySelector('.overlayone');

// Khi ấn vào hình ảnh, hiển thị thẻ yellow-page và overlay
image.addEventListener('click', () => {
    document.body.classList.add('activeSearch');
});

// Khi ấn vào overlay, ẩn thẻ yellow-page và overlay
overlayone.addEventListener('click', () => {
    document.body.classList.remove('activeSearch');
});

// -------------------------------------------------------acout icon click
const imagex = document.getElementById('openYellowPagex'); // Select image using id
const yellowPagex = document.querySelector('.yellow-pagex');
const overlayonex = document.querySelector('.overlayonex');

// When clicking on the image, display yellow-page and overlay
imagex.addEventListener('click', () => {
    document.body.classList.add('activeSearchx');
});

// When clicking on overlay, hide yellow-page and overlay
overlayonex.addEventListener('click', () => {
    document.body.classList.remove('activeSearchx');
});
// -----------------------------------------------------------cart icon  click

const imagexc = document.getElementById('openYellowPagexc'); // Select image using id
const yellowPagexc = document.querySelector('.yellow-pagexc');
const overlayonexc = document.querySelector('.overlayonexc');

// When clicking on the image, display yellow-page and overlay
imagexc.addEventListener('click', () => {
    document.body.classList.add('activeSearchxc');
});

// When clicking on overlay, hide yellow-page and overlay
overlayonexc.addEventListener('click', () => {
    document.body.classList.remove('activeSearchxc');
});
// -------------------------------------------------------------------btn-icon-cart
// script.js
const underlineCart = document.querySelector('.underlineCart');

function showItems(buttonNumber, btnElement) {
    // Ẩn tất cả các items trước
    const items = document.querySelectorAll('.itemsx');
    items.forEach(item => {
        item.classList.remove('active');
        item.style.display = 'none'; // Ẩn sau khi xóa class 'active'
    });
    
    // Hiển thị mục tương ứng với nút được nhấn
    const selectedItem = document.getElementById('items-' + buttonNumber);
    selectedItem.style.display = 'block'; // Hiển thị trước khi thêm class 'active'
    setTimeout(() => {
        selectedItem.classList.add('active');
    }, 10); // Thêm một chút thời gian để áp dụng chuyển đổi

    // Di chuyển underlineCart tới nút được nhấn
    const btnPosition = btnElement.getBoundingClientRect();
    const containerPosition = document.querySelector('.buttons').getBoundingClientRect();
    const offset = btnPosition.left - containerPosition.left;

    underlineCart.style.transform = `translateX(${offset}px)`;

    // Thay đổi màu sắc biểu tượng
    const icons = document.querySelectorAll('.cart-item-btn i');
    icons.forEach(icon => {
        icon.classList.remove('active-icon'); // Gỡ bỏ màu xanh khỏi tất cả biểu tượng
    });
    const currentIcon = btnElement.querySelector('i');
    currentIcon.classList.add('active-icon'); // Thêm màu xanh cho biểu tượng đang được nhấn
}

// Tự động gọi showItems cho nút 1 khi trang được tải
window.onload = () => {
    showItems(1, document.querySelector('.buttons button:first-child'));
};

// --------------------------------
// ẩn 1 thẻ khi ấn ra ngoài
document.addEventListener('click', function(event) {
    const productList = document.getElementById('product-list_d');
    
    // Kiểm tra nếu click không nằm trong thẻ product-list_d
    if (!productList.contains(event.target)) {
      productList.style.display = 'none'; // Ẩn thẻ bằng cách thêm display: none
    }
  });
//   ẩn 1 ảnh khi ấn vào input-------------------------------------------------------------------------------------------
const inputElement = document.querySelector('.myInput');
const imgElement = document.querySelector('.myImage');

// Ẩn ảnh khi input được nhấn (focus) và màn hình lớn hơn 820px
inputElement.addEventListener('focus', function() {
  if (window.innerWidth > 820) {
    imgElement.style.display = 'none';
  }
});

// Hiện lại ảnh khi rời khỏi input (blur) hoặc khi màn hình nhỏ hơn 820px
inputElement.addEventListener('blur', function() {
  imgElement.style.display = 'block'; // Hoặc 'inline', tùy thuộc vào kiểu ảnh bạn muốn
});

// Kiểm tra kích thước màn hình khi resize
window.addEventListener('resize', function() {
  if (window.innerWidth <= 820) {
    imgElement.style.display = 'block';
  }
});




  