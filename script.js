const imageForm = document.getElementById("image-form");
const imageContainer = document.getElementById("image-container");
const imageUrlEl = document.getElementById("image-url");

imageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const startIndex = parseInt(document.getElementById("start-index").value);
  const endIndex = parseInt(document.getElementById("end-index").value);
  const imageUrlTemplate = imageUrlEl.value;
  if (!imageUrlTemplate) return;

  imageContainer.innerHTML = "";

  for (let index = startIndex; index <= endIndex; index++) {
    const imageUrl = imageUrlTemplate.replace("{index}", index);
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageElement.alt = `Image ${index}`;
    imageElement.classList.add("image");
    imageContainer.appendChild(imageElement);
  }
});
