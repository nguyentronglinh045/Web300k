const cartsData = [
  {
    "Id": "f7932bfa-f946-4686-9d46-e1f56a6476ad",
    "Name": "Galaxy Note 10 Lite",
    "Price": 17990000,
    "Image": "https://cdn.tgdd.vn/Products/Images/42/206176/samsung-galaxy-note-10-plus-den-400x460-400x460.png",
    "Amount": 1
  },
  {
    "Id": "f7932bfa-f946-4686-9d46-e1f56a6476ad",
    "Name": "Galaxy Note 10 Lite",
    "Price": 17990000,
    "Image": "https://cdn.tgdd.vn/Products/Images/42/206176/samsung-galaxy-note-10-plus-den-400x460-400x460.png",
    "Amount": 1
  }
]

function renderProductInCart(cartsData) {
  const allProductInCart = cartsData.map((cartsData, index) => (
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
                <h5 class="text-grey mt-1 mr-1 ml-1">${cartsData.Amount}</h5>
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

renderProductInCart(cartsData)