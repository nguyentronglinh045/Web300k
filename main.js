document.addEventListener("DOMContentLoaded", fetchData);

function fetchData() {
  fetch("http://localhost:8000/api/cart")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data)
      renderProductInCart(data)
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });
}

function renderProductInCart(cartsData) {
  const cartListElement = document.querySelector('.cart-list');
  if (cartListElement) {
    const allProductInCart = cartsData.carts.map((cartsData, index) => (
      `<div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
              <div class="mr-1"><img class="rounded" src="${cartsData.Image}" width="70"></div>
              <div class="d-flex flex-column align-items-center product-details"><span class="font-weight-bold">
                  ${cartsData.Name}
                </span>
                <div class="d-flex flex-row product-desc">
                </div>
              </div>
              <div class="d-flex flex-row align-items-center qty">
                <i class="fa fa-minus text-danger"></i>
                <h5 class="text-grey mt-1 mr-1 ml-1">${convertToCurrency(cartsData.Amount)}</h5>
                <i class="fa fa-plus text-success"></i>
              </div>
              <div>
                <h5 class="text-grey">${cartsData.Price}</h5>
              </div>
              <div class="d-flex align-items-center">
                <i class="fa fa-trash mb-1 text-danger"></i>
              </div>
            </div>`
    ))
    document.querySelector('.cart-list').innerHTML = allProductInCart.join('')
  }
}

function renderProductNameAndPRice() {
  const productNameElements = document.querySelectorAll('.product-name');
  productNameElements.forEach(element => {
    element.textContent = productDetails[0].products;
  });
  document.querySelector('.product-item').textContent = convertToCurrency(productDetails[0].price)
}

function renderImg() {
  const imgElement = document.getElementById('magnifying_img');
  imgElement.src = productDetails[0].images
}

function renderProductionDescription() {
  const productDescriptionHeader = document.querySelector('.product-description-header');
  const productDescription = document.querySelector('.product-description');
  productDescriptionHeader.textContent = 'Đặc điểm nổi bật của ' + productDetails[0].products
  productDescription.textContent = productDetails[0].description
}
function convertToCurrency(amount) {
  // Chuyển đổi số tiền sang chuỗi và đảm bảo là số nguyên
  const amountStr = Math.round(amount).toString();
  // Tạo biến để lưu kết quả
  let result = '';

  // Lặp qua từng ký tự của số tiền
  for (let i = amountStr.length - 1, count = 0; i >= 0; i--) {
    // Thêm dấu phân cách hàng nghìn sau mỗi 3 số
    result = amountStr.charAt(i) + result;
    count++;
    if (count === 3 && i > 0) {
      result = '.' + result;
      count = 0;
    }
  }

  // Thêm ký hiệu "đ" vào cuối chuỗi
  result += 'đ';
  return result;
}

// Sử dụng hàm
const amount = 20000;
const convertedAmount = convertToCurrency(amount);
console.log(convertedAmount); // Kết quả sẽ là "20.000đ"

renderProductNameAndPRice()
fetchData()
renderImg()
renderProductionDescription()