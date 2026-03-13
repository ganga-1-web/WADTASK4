function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let phone = document.getElementById("phone").value.trim();
  let gender = document.getElementsByName("gender");
  let agree = document.getElementById("agreeBox");
  document.querySelectorAll(".error").forEach(e => e.innerText = "");

  let valid = true;
  if (name === "") {
    document.getElementById("nameErr").innerText = "Required *";
    valid = false;
  } else if (!/^[A-Za-z]+$/.test(name)) {
    document.getElementById("nameErr").innerText = "Only alphabets allowed";
    valid = false;
  }
  if (email === "") {
    document.getElementById("emailErr").innerText = "Required *";
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("emailErr").innerText = "Invalid email format";
    valid = false;
  }
  if (password === "") {
    document.getElementById("passErr").innerText = "Required *";
    valid = false;
  } else if (password.length < 8) {
    document.getElementById("passErr").innerText = "Minimum 8 characters";
    valid = false;
  }
  if (confirmPassword === "") {
    document.getElementById("confirmErr").innerText = "Required *";
    valid = false;
  } else if (password !== confirmPassword) {
    document.getElementById("confirmErr").innerText = "Passwords do not match";
    valid = false;
  }
  if (phone === "") {
    document.getElementById("phoneErr").innerText = "Required *";
    valid = false;
  } else if (!/^\d{10}$/.test(phone)) {
    document.getElementById("phoneErr").innerText = "Enter 10 digits only";
    valid = false;
  }
  let selected = false;
  for (let g of gender) {
    if (g.checked) selected = true;
  }
  if (!selected) {
    document.getElementById("genderErr").innerText = "Please select gender";
    valid = false;
  }
  if (!agree.checked) {
    document.getElementById("agreeErr").innerText = "Please agree to terms";
    valid = false;
  }
if (valid) {
  alert("Form submitted successfully!");
}
  return valid; 
}
