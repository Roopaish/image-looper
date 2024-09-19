const imageForm = document.getElementById("image-form");
const imageContainer = document.getElementById("image-container");
const imageUrlEl = document.getElementById("image-url");

imageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const startIndex = parseInt(document.getElementById("start-index").value);
  const endIndex = parseInt(document.getElementById("end-index").value);
  const paddingLeft = parseInt(document.getElementById("padding-left").value);
  const paddingRight = parseInt(document.getElementById("padding-right").value);
  const containerMaxWidth = parseFloat(
    document.getElementById("container-max-width").value
  );
  imageContainer.style = `max-width: ${containerMaxWidth}px;margin: 0 auto;`;

  const imageMaxWidth = parseFloat(document.getElementById("max-width").value);

  const imageUrlTemplate = imageUrlEl.value;
  if (!imageUrlTemplate) return;

  imageContainer.innerHTML = "";

  for (let index = startIndex; index <= endIndex; index++) {
    const paddedIndex = index
      .toString()
      .padStart(paddingLeft, "0")
      .padEnd(paddingRight, "0");
    const imageUrl = imageUrlTemplate.replace("{index}", paddedIndex);
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageElement.alt = `Image ${paddedIndex}`;
    imageElement.style = `max-width:${imageMaxWidth}px;`;
    imageElement.classList.add("image");
    imageContainer.appendChild(imageElement);
  }
});
