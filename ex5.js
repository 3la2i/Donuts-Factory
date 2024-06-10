document.getElementById("order-form").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const username = event.target.username.value;
  console.log(username);

  const Age = event.target.Age.value;
  console.log(Age);
}
