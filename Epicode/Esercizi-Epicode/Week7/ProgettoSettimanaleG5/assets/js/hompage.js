const ulReference = document.getElementById("ul");
const insertProductHTML = (product) => {
  let newListItem = document.createElement("li");
  newListItem.classList.add("card");
  newListItem.classList.add("col-3");
  newListItem.classList.add("mb-5");
  newListItem.classList.add("ms-2");
  newListItem.innerHTML = `
  <img src="${product.imageUrl}" class="card-img-top" alt="" style="max-height: 500px;"/>
  <div class="card-body w-100">
    <h3 class="card-title">${product.name}</h3>
    <p class="card-text fs-4">${product.description}</p>
    <a href="/details.html?pid=${product._id}" class="btn btn-warning w-100 ">Details</a>
    <a href="/edit.html?pid=${product._id}" class="btn btn-primary w-100 mt-2">Edit</a>
    <p class="pt-4 fs-2 fw-3">${product.price}€</p>
  </div>`;
  ulReference.appendChild(newListItem);
};

const API_ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/";
const getProd = async () => {
  let response = await fetch(API_ENDPOINT, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzExZGY4MWI0MjAwMTM5YjI3ZTkiLCJpYXQiOjE2NzkwNDQ4OTMsImV4cCI6MTY4MDI1NDQ5M30.dK_Nhxliu5tEWG6B2kLpvrnaY6Lhm27DrohtFDSo9PI",
    },
  });
  console.log(response);
  let data = await response.json();
  console.log(data);
  data.forEach((element) => {
    insertProductHTML(element);
  });
};
getProd();
