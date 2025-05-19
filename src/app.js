document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({}));
});

// form validation
const checkoutButton = document.querySelector(".checkout-button");
checkoutButton.disabled = true;

const form = document.querySelector("#checkoutForm");
form.addEventListener("keyup", function () {
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].value.length !== 0) {
      checkoutButton.classList.remove("disabled");
      checkoutButton.classList.add("disabled");
    } else {
      return false;
    }
  }
  checkoutButton.disabled = false;
  checkoutButton.classList.remove("disabled");
});

// kirim data ketika tombol checkout diklik
checkoutButton.addEventListener("click", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = new URLSearchParams(FormData);
  const objData = Object.fromEntries(data);
  const message = formatMessage(objData);
  window.open(
    "http://wa.me/62081246191753?text=" + encodeURIComponent(message)
  );
});

// format pesan whatsapp
const formatMessage = (obj) => {
  return `Data Customer
    Nama: ${obj.nama}
    Email:${obj.email}
    No Hp:${obj.phone}

    `;
};
