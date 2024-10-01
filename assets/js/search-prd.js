const products = [
    { name: 'Product a', price: '$1B', type: 'clothing', imgPrd: '<img class="product-img" src="assets/img/froduct-new1.svg" alt="">' },
    { name: 'Product b', price: '$2B', type: 'clothing', imgPrd: '<img class="product-img" src="assets/img/sale1.svg" alt="">' },
    { name: 'Product c', price: '$3B', type: 'clothing', imgPrd: '<img class="product-img" src="assets/img/froduct-new1.svg" alt="">' },
    { name: 'Product d', price: '$4B', type: 'clothing', imgPrd: '<img class="product-img" src="assets/img/sale1.svg" alt="">' },
    { name: 'Product q', price: '$5B', type: 'clothing', imgPrd: '<img class="product-img" src="assets/img/sale2.svg" alt="">' },
    { name: 'Product w', price: '$5B', type: 'clothing', imgPrd: '<img class="product-img" src="assets/img/sale3.svg" alt="">' },
    { name: 'Product e', price: '$6B', type: 'clothing', imgPrd: '<img class="product-img" src="assets/img/sale4.svg" alt="">' },
];

const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');
const productType = document.getElementById('productType');

// Hàm lọc sản phẩm theo loại đã chọn
function filterByType() {
    const selectedType = productType.value;
    productList.innerHTML = ''; // Xóa danh sách cũ

    const filteredProducts = products.filter(product => 
        selectedType === "" || product.type === selectedType
    );

    if (filteredProducts.length > 0) {
        productList.style.display = 'flex'; // Hiển thị danh sách
        filteredProducts.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${product.imgPrd}</span>
                <span>${product.name}</span>
                <span>${product.price}</span>`;
            li.addEventListener('click', () => {
                searchInput.value = product.name; // Điền vào ô tìm kiếm
                productList.style.display = 'none'; // Ẩn danh sách
            });
            productList.appendChild(li);
        });
    } else {
        productList.style.display = 'none'; // Ẩn danh sách nếu không tìm thấy sản phẩm
    }
}

// Hàm lọc sản phẩm theo từ khóa tìm kiếm
function filterBySearch() {
    const query = searchInput.value.toLowerCase();
    const selectedType = productType.value;
    productList.innerHTML = ''; // Xóa danh sách cũ

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query) && 
        (selectedType === "" || product.type === selectedType)
    );

    if (filteredProducts.length > 0) {
        productList.style.display = 'flex'; // Hiển thị danh sách
        filteredProducts.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${product.imgPrd}</span>
                <span>${product.name}</span>
                <span>${product.price}</span>`;
            li.addEventListener('click', () => {
                searchInput.value = product.name; // Điền vào ô tìm kiếm
                productList.style.display = 'none'; // Ẩn danh sách
            });
            productList.appendChild(li);
        });
    } else {
        productList.style.display = 'none'; // Ẩn danh sách nếu không tìm thấy sản phẩm
    }
}

// Lắng nghe sự kiện khi người dùng thay đổi loại sản phẩm
productType.addEventListener('change', filterByType);
// Lắng nghe sự kiện khi người dùng nhập vào ô tìm kiếm
searchInput.addEventListener('input', filterBySearch);


// search product screen PC-----------------------------------------------------------------------------------------------------------
const products_d = [
    { name: 'Product a', price: '300.000đ', type: 'clothing', imgPrd: 'assets/img/froduct-new-jean.svg'},
    { name: 'Product b', price: '300.000đ', type: 'clothing', imgPrd: 'assets/img/froduct-new-shirt.svg'},
    { name: 'Product c', price: '300.000đ', type: 'clothing', imgPrd: 'assets/img/froduct-new1.svg'},
];

document.getElementById('search-input-product_d').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const productList = document.getElementById('product-list_d');

    // Kiểm tra nếu ô nhập tìm kiếm rỗng
    if (query.trim() === '') {
        productList.style.display = 'none'; // Không hiển thị sản phẩm nào
        return; // Kết thúc hàm
    }

    const filteredProducts = products_d.filter(product => product.name.toLowerCase().includes(query));

    productList.innerHTML = ''; // Xóa danh sách sản phẩm hiện tại

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item_d');

            productItem.innerHTML = `
                <img src="${product.imgPrd}" alt="${product.imgPrd}">
                <div class="search-pc-name-pc">
                <h3 class="product-name_d">${product.name}</h3>
                <p class="product-price_d">${product.price}</p>
                </div>
            `;

            productList.appendChild(productItem);
        });

        productList.style.display = 'flex'; // Hiển thị danh sách sản phẩm
    } else {
        const noResult = document.createElement('p');
        noResult.classList.add('no-result_d');
        // noResult.textContent = 'Không tìm thấy sản phẩm nào.';
        productList.appendChild(noResult);

        productList.style.display = 'flex'; // Hiển thị thông báo không tìm thấy sản phẩm
    }
});


