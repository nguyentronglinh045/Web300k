document.addEventListener("DOMContentLoaded", fetchData);

function fetchData() {
  fetch("http://localhost:8000/api/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      renderProducts(data);
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });
}

function renderProducts(productsData) {
  const allProducts = productsData.products.map(
    (productsData, index) =>
      `
      <div class="col-md-3">
              <div>
                <label for=""><span class="badge badge-warning ml-2">Trả góp<b>0%</b></span></label>
              </div>
              <img src=${productsData.images}
                class="card-img-top w-0" alt="...">
              <div class="card-body">
                <button onclick="navigateDetail('${productsData.id}')" id="dynamic-link" href="./detail.html" class="card-title text-decoration-none"
                  style="font-size: 15px;display: block;">${productsData.products}
                </button>
                <div style="display: inline;">
                  <p class="card-text font-weight-bolder " style="color: red;display: inline;">16.490.000đ</p>
                </div>
                <p class="font-weight-light-bold">Giảm thêm <b>300.000đ</b></p>
                <div>
                  <!-- rating result with star -->
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <small class="text-muted font-weight-lighter user-select-none">${productsData.rate} Lượt</small>
                </div>
              </div>
            </div>
      `
  );
  document.querySelector(".all-product").innerHTML = allProducts.join("");
}


function navigateDetail(id) {
  console.log(id)
  location.href = `http://127.0.0.1:5500/detail.html?id=${id}`
} 

// renderProducts()
//   function displayData(data) {
//     const dataContainer = document.getElementById('data-container');
//     dataContainer.innerHTML = '';
//     data.forEach(item => {
//       const itemElement = document.createElement('div');
//       itemElement.textContent = item.name;
//       dataContainer.appendChild(itemElement);
//     });
//   }
