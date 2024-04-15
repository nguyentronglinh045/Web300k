// document.addEventListener("DOMContentLoaded", fetchData);

// function fetchData() {
//   fetch("http://localhost:8000/api/products")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       renderProducts(data);
//     })
//     .catch((error) => {
//       console.error("There was a problem with your fetch operation:", error);
//     });
// }
const data = [
  {
    "id": "2007A285-D734-4B03-8F5C-1F52A44D1050",
    "products": "Iphone 11 Pro Max",
    "price": 200,
    "rate": 4,
    "description": "test thu nodejs vs server sql",
    "amount": 5,
    "screen": "Dynamic AMOLED, 6.8\", Quad HD+ (2K+)",
    "OS": "Android 9 (Pie)",
    "CPU": "\tExynos 9825 8 nhân",
    "RAM": "12GB",
    "MemoryStorage": "Dung lượng lên đến 256GB",
    "iamge": null,
    "categories": "Phone"
  },
  {
    "id": "B1F31B93-7FD3-46EC-B198-AB5FF71FB22C",
    "products": "Xiaomi Redmi9 (4GB/64GB)",
    "price": 200,
    "rate": 4,
    "description": "test thu nodejs vs server sql",
    "amount": 5,
    "screen": "Dynamic AMOLED, 6.8\", Quad HD+ (2K+)",
    "OS": "Android 9 (Pie)",
    "CPU": "\tExynos 9825 8 nhân",
    "RAM": "12GB",
    "MemoryStorage": "Dung lượng lên đến 256GB",
    "iamge": null,
    "categories": "Phone"
  },
  {
    "id": "2A1EF774-4D63-457D-A7CD-B0CB803F9480",
    "products": "OPPO A93",
    "price": 200,
    "rate": 4,
    "description": "test thu nodejs vs server sql",
    "amount": 5,
    "screen": "Dynamic AMOLED, 6.8\", Quad HD+ (2K+)",
    "OS": "Android 9 (Pie)",
    "CPU": "\tExynos 9825 8 nhân",
    "RAM": "12GB",
    "MemoryStorage": "Dung lượng lên đến 256GB",
    "iamge": null,
    "categories": "Phone"
  },
  {
    "id": "F7932BFA-F946-4686-9D46-E1F56A6476AD",
    "products": "Galaxy Note 10 Lite",
    "price": 15990000,
    "rate": 4,
    "description": "Trông ngoại hình khá giống nhau, tuy nhiên Galaxy Note 10+ sở hữu khá nhiều điểm khác biệt so với Galaxy Note 10 và đây được xem là một trong những chiếc máy đáng mua nhất trong năm 2019, đặc biệt dành cho những người thích một chiếc máy màn hình lớn, camera chất lượng hàng đầu.",
    "amount": 5,
    "screen": "Dynamic AMOLED, 6.8\", Quad HD+ (2K+)",
    "OS": "Android 9 (Pie)",
    "CPU": "\tExynos 9825 8 nhân",
    "RAM": "12GB",
    "MemoryStorage": "Dung lượng lên đến 256GB",
    "iamge": null,
    "categories": "Phone"
  },
  {
    "id": "C21B71C6-1A3C-48AB-A488-E55A06A9F77E",
    "products": "Vsmart Joy 4 (4GB/64GB)",
    "price": 200,
    "rate": 4,
    "description": "test thu nodejs vs server sql",
    "amount": 5,
    "screen": "Dynamic AMOLED, 6.8\", Quad HD+ (2K+)",
    "OS": "Android 9 (Pie)",
    "CPU": "\tExynos 9825 8 nhân",
    "RAM": "12GB",
    "MemoryStorage": "Dung lượng lên đến 256GB",
    "iamge": null,
    "categories": null
  },
  {
    "id": "2007A285-D734-4B03-8F5C-1F52A44D1050",
    "products": "Iphone 11 Pro Max",
    "price": 200,
    "rate": 4,
    "description": "test thu nodejs vs server sql",
    "amount": 5,
    "screen": "Dynamic AMOLED, 6.8\", Quad HD+ (2K+)",
    "OS": "Android 9 (Pie)",
    "CPU": "\tExynos 9825 8 nhân",
    "RAM": "12GB",
    "MemoryStorage": "Dung lượng lên đến 256GB",
    "iamge": null,
    "categories": "Phone"
  },
  {
    "id": "B1F31B93-7FD3-46EC-B198-AB5FF71FB22C",
    "products": "Xiaomi Redmi9 (4GB/64GB)",
    "price": 200,
    "rate": 4,
    "description": "test thu nodejs vs server sql",
    "amount": 5,
    "screen": "Dynamic AMOLED, 6.8\", Quad HD+ (2K+)",
    "OS": "Android 9 (Pie)",
    "CPU": "\tExynos 9825 8 nhân",
    "RAM": "12GB",
    "MemoryStorage": "Dung lượng lên đến 256GB",
    "iamge": null,
    "categories": "Phone"
  },
  {
    "id": "2A1EF774-4D63-457D-A7CD-B0CB803F9480",
    "products": "OPPO A93",
    "price": 200,
    "rate": 4,
    "description": "test thu nodejs vs server sql",
    "amount": 5,
    "screen": "Dynamic AMOLED, 6.8\", Quad HD+ (2K+)",
    "OS": "Android 9 (Pie)",
    "CPU": "\tExynos 9825 8 nhân",
    "RAM": "12GB",
    "MemoryStorage": "Dung lượng lên đến 256GB",
    "iamge": null,
    "categories": "Phone"
  },
  {
    "id": "F7932BFA-F946-4686-9D46-E1F56A6476AD",
    "products": "Galaxy Note 10 Lite",
    "price": 15990000,
    "rate": 4,
    "description": "Trông ngoại hình khá giống nhau, tuy nhiên Galaxy Note 10+ sở hữu khá nhiều điểm khác biệt so với Galaxy Note 10 và đây được xem là một trong những chiếc máy đáng mua nhất trong năm 2019, đặc biệt dành cho những người thích một chiếc máy màn hình lớn, camera chất lượng hàng đầu.",
    "amount": 5,
    "screen": "Dynamic AMOLED, 6.8\", Quad HD+ (2K+)",
    "OS": "Android 9 (Pie)",
    "CPU": "\tExynos 9825 8 nhân",
    "RAM": "12GB",
    "MemoryStorage": "Dung lượng lên đến 256GB",
    "iamge": null,
    "categories": "Phone"
  },
  {
    "id": "C21B71C6-1A3C-48AB-A488-E55A06A9F77E",
    "products": "Vsmart Joy 4 (4GB/64GB)",
    "price": 200,
    "rate": 4,
    "description": "test thu nodejs vs server sql",
    "amount": 5,
    "screen": "Dynamic AMOLED, 6.8\", Quad HD+ (2K+)",
    "OS": "Android 9 (Pie)",
    "CPU": "\tExynos 9825 8 nhân",
    "RAM": "12GB",
    "MemoryStorage": "Dung lượng lên đến 256GB",
    "iamge": null,
    "categories": null
  }
]
function renderProducts(productsData) {
  const allProducts = data.map(
    (productsData, index) =>
      `
      <div class="col-md-3">
              <div>
                <label for=""><span class="badge badge-warning ml-2">Trả góp<b>0%</b></span></label>
              </div>
              <img src=${productsData.images}
                class="card-img-top w-0" alt="...">
              <div class="card-body">
                <a href="./detail.html" class="card-title text-decoration-none"
                  style="font-size: 15px;display: block;">${productsData.products}</a>
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
renderProducts()
//   function displayData(data) {
//     const dataContainer = document.getElementById('data-container');
//     dataContainer.innerHTML = '';
//     data.forEach(item => {
//       const itemElement = document.createElement('div');
//       itemElement.textContent = item.name;
//       dataContainer.appendChild(itemElement);
//     });
//   }
