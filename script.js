const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
let img1 = document.getElementById("img1");
let email = document.getElementById("email");
const signupbtn = document.getElementById("signupbtn");
signupbtn.onclick = function () {
  alert("mail registered successfully.We will connect through newsletters🙂");
  email.value = "";
};
increment.addEventListener("click", (e) => {
  e.preventDefault();
  img1.src = "./images/back2.jpg";
  increment.addEventListener("click", (e) => {
    e.preventDefault();
    img1.src = "./images/back3.jpg";
    increment.addEventListener("click", (e) => {
      e.preventDefault();
      img1.src = "./images/back4.jpg";
      decrement.addEventListener("click", (e) => {
        e.preventDefault();
        img1.src = "./images/back3.jpg";
        decrement.addEventListener("click", (e) => {
          e.preventDefault();
          img1.src = "./images/back2.jpg";
          decrement.addEventListener("click", (e) => {
            e.preventDefault();
            img1.src = "./images/background.jpg";
          });
        });
        increment.addEventListener("click", (e) => {
          e.preventDefault();
          img1.src = "./images/back2.jpg";
          increment.addEventListener("click", (e) => {
            e.preventDefault();
            img1.src = "./images/back3.jpg";
          });
        });
      });
    });
  });
});
decrement.addEventListener("click", (e) => {
  e.preventDefault();
  img1.src = "./images/background.jpg";
});

const items = [
  {
    id: 1,
    name: "Omee",
    cost: 110,
    image: "./images/daily1.jpg",
    details:
      "'Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus incidunt dolore aperiam, modi maiores.'",
    category: "gastrict",
    quantity: 1,
  },
  {
    id: 2,
    name: "VPlate++",
    cost: 17,
    image: "./images/dengue1.jpg",
    details:
      "'Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus incidunt dolore aperiam, modi maiores.'",
    category: "dengue",
    quantity: 1,
  },
  {
    id: 9,
    name: "G-plet",
    cost: 12,
    image: "./images/m1.jpg",
    details:
      "'Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus incidunt dolore aperiam, modi maiores.'",
    category: "malaria",
    quantity: 1,
  },
  {
    id: 13,
    name: "Vitamin E Capsule",
    cost: 12,
    image: "./images/s1.jpg",
    details:
      "'Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus incidunt dolore aperiam, modi maiores.'",
    category: "skin",
    quantity: 1,
  },
];
const daily = document.getElementById("daily");
const data = document.getElementById("data");
const sample = document.getElementById("sample");
const listed = document.getElementById("listed");

items.forEach((element) => {
  let list = document.createElement("li");
  list.className = "list";
  data.insertBefore(list, sample);

  let image = document.createElement("img");
  image.src = element.image;
  list.appendChild(image);

  let name = document.createElement("p");
  name.textContent = element.name;
  list.appendChild(name);

  let cost = document.createElement("h3");
  cost.textContent = `${element.cost}\\-`;
  list.appendChild(cost);

  let cause = document.createElement("h4");
  cause.textContent = `Used for ${element.category} purpose`;
  list.appendChild(cause);

  let add = document.createElement("button");
  add.textContent = "add to cart";
  add.id = "addTo";
  add.onclick = () => addToCart(element);
  list.appendChild(add);
});

function addToCart(item) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(item);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert(`${item.name} has been added to your cart!`);
}
