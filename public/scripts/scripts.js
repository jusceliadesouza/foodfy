//menu - página ativa
const currentPage = location.pathname;
const menuItens = document.querySelectorAll(".links a");

for (item of menuItens) {
  if (currentPage.includes(item.getAttribute("href"))) {
    item.classList.add("active");
  }
}

//página inicial - modal
const modalOverlay = document.querySelector(".modal-overlay");
const cards_modal = document.querySelectorAll(".card-modal");

for (let card of cards_modal) {
  //abrir modal
  card.addEventListener("click", function () {
    modalOverlay.classList.add("active");

    const card_image = card.querySelector("img").src;
    modalOverlay.querySelector("img").src = `${card_image}`;

    const card_title = card.querySelector("#title").textContent;
    modalOverlay
      .querySelector("#title")
      .insertAdjacentText("afterbegin", `${card_title}`);

    const cardChef = card.querySelector("#chef").textContent;
    modalOverlay
      .querySelector("#chef")
      .insertAdjacentText("beforeend", `${cardChef}`);
  });

  //fechar modal
  document.querySelector(".close-modal").addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("img").src = "";
    modalOverlay.querySelector("#title").textContent = "";
    modalOverlay.querySelector("#chef").textContent = "";
  });
}

// // cards de receitas
// const cards = document.querySelectorAll(".card");

// for (let card of cards) {
//   card.addEventListener("click", function () {
//     const array = Array.from(cards);
//     const ind = array.indexOf(card);

//     window.location.href = `/recipes/${ind}`;
//   });
// }

//página de receita única
const details = document.querySelectorAll('.details')

for ( let detail of details ) {
    detail.addEventListener('click', function() {
        const show = detail.querySelector('.detail-show')
        const display = detail.querySelector('.detail-display')

        toHide(show, display)
    });
}

/*<<< FUNCTIONS >>>*/
function toHide(var1, var2) {
    if (var1.innerHTML == 'ESCONDER') {
        var2.classList.add('disable')
        var1.innerHTML = 'MOSTRAR'
    } else {
        var2.classList.remove('disable')
        var1.innerHTML = 'ESCONDER'
    }
}
