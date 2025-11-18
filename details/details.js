const creditRadio = document.getElementById("credit");
const installmentsDiv = document.getElementById("creditInstallments");
const radios = document.querySelectorAll('input[name="payment"]');

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (creditRadio.checked) {
      installmentsDiv.style.display = "block";
    } else {
      installmentsDiv.style.display = "none";
    }
  });
});
