const contactButton = document.querySelector(".contacts-button");
const contactPopup = document.querySelector(".modal");
if (contactPopup) {
  const contactClose = contactPopup.querySelector(".modal-close");
  const contactForm = contactPopup.querySelector(".write-form");
  const contactName = contactPopup.querySelector(".write-input-name");
  const contactEmail = contactPopup.querySelector(".write-input-email");

  let isStorageSupport = true;
  let storage = "";

  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }

  contactButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactPopup.classList.add("modal_show");

    if (storage) {
      contactName.value = storage;
      contactEmail.focus();
    } else {
      contactName.focus();
    }
  });

  contactClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactPopup.classList.remove("modal_show");
    contactPopup.classList.remove("modal_error");
  });

  contactForm.addEventListener("submit", function (evt) {
    if (!contactName.value || !contactEmail.value) {
      evt.preventDefault();

      contactPopup.classList.remove("modal_error");
      contactPopup.offsetWidth = contactPopup.offsetWidth;
      contactPopup.classList.add("modal_error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", contactName.value);
      }
    }
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      if (contactPopup.classList.contains("modal_show")) {
        evt.preventDefault();
        contactPopup.classList.remove("modal_show");
        contactPopup.classList.remove("modal_error");
      }
    }
  });
}




ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    center: [59.939135, 30.321458],
    zoom: 17,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });

  var placemark = new ymaps.Placemark([59.938669, 30.323118], {},
    {
      iconLayout: 'default#image',
      iconImageHref: '../img/map-marker.png',
      iconImageSize: [231, 190],
      iconImageOffset: [-50, -210]
    });
  myMap.geoObjects.add(placemark);
}
