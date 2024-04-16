document.addEventListener("DOMContentLoaded", fetchData);
document.addEventListener("DOMContentLoaded", fetchDataDetail);

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

function fetchDataDetail(id) {
  fetch(`http://localhost:8000/api/product/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data)
      renderProductNameAndPrice(data)
      renderProductionDescription(data)
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

function renderProductNameAndPrice(data) {
  const productNameElements = document.querySelectorAll('.product-name');
  productNameElements.forEach(element => {
    element.textContent = data.product[0].products;
  });
  document.querySelector('.product-item').textContent = convertToCurrency(data.product[0].price)
}

function renderImg() {
  const imgElement = document.getElementById('magnifying_img');
  imgElement.src = data.product[0].images
}

function renderProductionDescription(data) {
  const productDescriptionHeader = document.querySelector('.product-description-header');
  const productDescription = document.querySelector('.product-description');
  productDescriptionHeader.textContent = 'Đặc điểm nổi bật của ' + data.product[0].products
  productDescription.textContent = data.product[0].description
}
function convertToCurrency(amount) {
  const amountStr = Math.round(amount).toString();
  let result = '';

  for (let i = amountStr.length - 1, count = 0; i >= 0; i--) {
    result = amountStr.charAt(i) + result;
    count++;
    if (count === 3 && i > 0) {
      result = '.' + result;
      count = 0;
    }
  }
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