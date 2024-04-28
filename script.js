const filterbtn = document.getElementsByClassName("filterbtn");
const card = document.getElementsByClassName("card");
console.log(card);
const button = document.getElementsByClassName("card-btn");
let basket = [];
if (localStorage.getItem("basket") == null) {
  localStorage.setItem("basket", JSON.stringify(basket));
}
class Flower {
  constructor(name, price, image, id, count) {
    (this.name = name),
      (this.price = price),
      (this.image = image),
      (this.id = id),
      (this.count = count);
  }
}
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    let name =
      button[i].previousElementSibling.previousElementSibling.textContent;
    let price = button[i].previousElementSibling.firstElementChild.textContent;
    let image =
      button[
        i
      ].previousElementSibling.previousElementSibling.previousElementSibling.getAttribute(
        "src"
      );
    let id = button[i].parentElement.getAttribute("data-id");

    let basket = JSON.parse(localStorage.getItem("basket"));
    let target = basket.find((e) => e.id == id);
    if (!target) {
      let count = 1;
      let newFlower = new Flower(name, price, image, id, count);
      basket.push(newFlower);
      localStorage.setItem("basket", JSON.stringify(basket));
    } else {
      target.count++;
      localStorage.setItem("basket", JSON.stringify(basket));
    }
  });
}

function filter() {
  for (let i = 0; i < filterbtn.length; i++) {
    filterbtn[i].addEventListener("click", (e) => {
      let type = e.target.getAttribute("data-id");
      for (let i = 0; i < card.length; i++) {
        if (card[i].className.includes(type)) {
          card[i].classList.add("active");
        } else {
          card[i].classList.remove("active");
        }
      }
    });
  }
}
filter();
