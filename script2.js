let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");

let email = document.getElementById("email");

let number = document.getElementById("number");
let address = document.getElementById("address");

btn.onclick = function (e) {
  e.preventDefault();
  if (
    firstName.value === "" ||
    lastName.value === "" ||
    email.value === "" ||
    number.value === "" ||
    address.value === ""
  ) {
    alert("Please Fill out the FORM");
  } else {
    alert("we will connect through email or mobile soon");
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    number.value = "";
    address.value = "";
  }
};
const signupbtn = document.getElementById("signupbtn");
signupbtn.onclick = function () {
  alert("mail registered successfully.We will connect through newsletters🙂");
  signup.value = "";
};
