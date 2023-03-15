const row = document.getElementById("row");
const col = document.getElementById("col");
let i = 0;

fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((book) => {
      i++;
      var newcol = document.createElement("div");
      newcol.classList.add("col");
      newcol.setAttribute("id", `${i}`);
      newcol.innerHTML = `<div class="card">
      <img
        src="${book.img}
      "
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">€
          ${book.price}
        </p>
        <a href="#"   class="btn btn-primary">Buy</a>
        <a href="#" onClick="cancel(${i})" class="btn btn-danger">Discard</a>
      </div>
    </div>`;
      row.appendChild(newcol);
    });
  });

const cancel = (indice) => {
  let discardedBook = document.getElementsByClassName("col")[indice - 1];
  discardedBook.style.display = "none";
};
