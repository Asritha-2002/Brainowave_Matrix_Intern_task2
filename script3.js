const items = [
  {
    id: 1,
    name: "Omee",
    cost: 11,
    image: "./images/daily1.jpg",
    details:
      "'Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus incidunt dolore aperiam, modi maiores.'",
    category: "daily",
    quantity: 1,
  },
  {
    id: 2,
    name: "omex-SR",
    cost: 23,
    image: "./images/daily2.jpg",
    details:
      "'Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus incidunt dolore aperiam, modi maiores.'",
    category: "daily",
    quantity: 1,
  },
  {
    id: 3,
    name: "SRZOLE-40",
    cost: 20,
    image: "./images/daily3.jpg",
    details:
      "'Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus incidunt dolore aperiam, modi maiores.'",
    category: "daily",
    quantity: 1,
  },
  {
    id: 4,
    name: "Amlamukt",
    cost: 18,
    image: "./images/daily4.jpg",
    details:
      "'Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus incidunt dolore aperiam, modi maiores.'",
    category: "daily",
    quantity: 1,
  },
  {
    id: 5,
    name: "VPlate++",
    cost: 17,
    image: "./images/dengue1.jpg",
    details:
      "'Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus incidunt dolore aperiam, modi maiores.'",
    category: "dengue",
    quantity: 1,
  },
  {
    id: 6,
    name: "Dengue Cure",
    cost: 10,
    image: "./images/dengue2.jpg",
    details:
      "'Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus incidunt dolore aperiam, modi maiores.'",
    category: "dengue",
    quantity: 1,
  },
  {
    id: 7,
    name: "Dengue kit",
    cost: 13,
    image: "./images/dengue3.jpg",
    details:
      "'Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus incidunt dolore aperiam, modi maiores.'",
    category: "dengue",
    quantity: 1,
  },
  {
    id: 8,
    name: "Arplet-Dengue",
    cost: 15,
    image: "./images/dengue4.jpg",
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
    id: 10,
    name: "Norsunate-100",
    cost: 13,
    image: "./images/m2.jpg",
    details:
      "'Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus incidunt dolore aperiam, modi maiores.'",
    category: "malaria",
    quantity: 1,
  },
  {
    id: 11,
    name: "Synriam 150-750mg",
    cost: 14,
    image: "./images/m3.jpg",
    details:
      "'Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus incidunt dolore aperiam, modi maiores.'",
    category: "malaria",
    quantity: 1,
  },
  {
    id: 12,
    name: "Primaquine",
    cost: 15,
    image: "./images/m4.jpg",
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
  {
    id: 14,
    name: "Skin Care Kit",
    cost: 13,
    image: "./images/s2.jpg",
    details:
      "'Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus incidunt dolore aperiam, modi maiores.'",
    category: "skin",
    quantity: 1,
  },
  {
    id: 15,
    name: "Vitamin C&E Serum",
    cost: 14,
    image: "./images/s3.jpg",
    details:
      "'Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus incidunt dolore aperiam, modi maiores.'",
    category: "skin",
    quantity: 1,
  },
  {
    id: 16,
    name: "Lamere Kit",
    cost: 15,
    image: "./images/s4.jpg",
    details:
      "'Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus incidunt dolore aperiam, modi maiores.'",
    category: "skin",
    quantity: 1,
  },
];

const daily = document.getElementById("daily");
const dengue = document.getElementById("dengue");
const malaria = document.getElementById("malaria");
const skin = document.getElementById("skin");
const data = document.getElementById("data");
const sample = document.getElementById("sample");
const listed = document.getElementById("listed");
const maindata = document.getElementById("maindata");

daily.onclick = function () {
  const dailyItems = items.filter((item) => item.category === "daily");
  dailyItems.forEach((element) => {
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

    let add = document.createElement("button");
    add.textContent = "add to cart";
    add.id = "addTo";
    add.onclick = () => addToCart(element);
    list.appendChild(add);

    let details = document.createElement("button");
    details.textContent = "for more details";
    details.id = "details";
    details.onclick = () => total(element.id);
    list.appendChild(details);
  });
};

dengue.onclick = function () {
  const dailyItems = items.filter((item) => item.category === "dengue");
  dailyItems.forEach((element) => {
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

    let add = document.createElement("button");
    add.textContent = "add to cart";
    add.id = "addTo";
    add.onclick = () => addToCart(element);
    list.appendChild(add);

    let details = document.createElement("button");
    details.textContent = "for more details";
    details.id = "details";
    details.onclick = () => total(element.id);
    list.appendChild(details);
  });
};
malaria.onclick = function () {
  const dailyItems = items.filter((item) => item.category === "malaria");
  dailyItems.forEach((element) => {
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

    let add = document.createElement("button");
    add.textContent = "add to cart";
    add.id = "addTo";
    add.onclick = () => addToCart(element);
    list.appendChild(add);

    let details = document.createElement("button");
    details.textContent = "for more details";
    details.id = "details";
    details.onclick = () => total(element.id);
    list.appendChild(details);
  });
};

skin.onclick = function () {
  const dailyItems = items.filter((item) => item.category === "skin");
  dailyItems.forEach((element) => {
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

    let add = document.createElement("button");
    add.textContent = "add to cart";
    add.id = "addTo";
    add.onclick = () => addToCart(element);
    list.appendChild(add);

    let details = document.createElement("button");
    details.textContent = "for more details";
    details.id = "details";
    details.onclick = () => total(element.id);
    list.appendChild(details);
  });
};

function addToCart(item) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(item);
  console.log(item);

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert(`${item.name} has been added to your cart!`);
}

function total(id) {
  // let idElement = document.getElementById(`${id}`);
  let totalinfo = document.getElementById("totalinfo");
  totalinfo.innerHTML = "";
  //  console.log(`Selected ID: ${id}`);
  items.map((element) => {
    if (element.id == `${id}`) {
      let image = document.createElement("img");
      image.src = element.image;
      totalinfo.appendChild(image);

      let name = document.createElement("p");
      name.textContent = element.name;
      totalinfo.appendChild(name);

      let cost = document.createElement("h3");
      cost.textContent = `Cost:${element.cost}\\-`;
      totalinfo.appendChild(cost);

      let qlabel = document.createElement("label");
      qlabel.textContent = "Quantity";
      let quantity = document.createElement("input");
      quantity.type = "number";
      quantity.min = "1";
      quantity.value = "1";
      quantity.id = "pquantity";
      quantity.style.textAlign = "center";
      totalinfo.appendChild(qlabel);
      totalinfo.appendChild(quantity);

      let details = document.createElement("p");
      details.id = "details";
      details.textContent = element.details;
      totalinfo.appendChild(details);

      let order = document.createElement("button");
      order.textContent = "Add to Cart";
      order.id = "orderedItems";
      totalinfo.appendChild(order);

      let ordered = document.getElementById("orderedItems");
      ordered.onclick = () => {
        let quantityInput = document.getElementById("pquantity").value; // Get the value from the quantity input

        let cartItem = {
          image: element.image,
          name: element.name,
          cost: element.cost,
          quantity: quantityInput,
        };

        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push(cartItem);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        window.location.href = "cart.html";
      };

      let close = document.createElement("button");
      close.textContent = "Back";
      close.id = "closeinfo";
      totalinfo.appendChild(close);

      let closeinfo = document.getElementById("closeinfo");
      closeinfo.onclick = function () {
        totalinfo.removeChild(image);
        totalinfo.removeChild(name);
        totalinfo.removeChild(cost);
        totalinfo.removeChild(details);
        totalinfo.removeChild(quantity);
        totalinfo.removeChild(close);
        totalinfo.removeChild(order);
      };
    }
  });
}
