const diac = [
  "ــ\u064eـ", // "fat-ha",
  "ــ\u064Fـ", // "damma",
  "ــ\u0650ـ", // "kasra",
  "ــ\u0652ـ", // "sukun",
  "ــ\u0651ـ", // "shadda",
  "ــ\u064Bـ", // "tanween nasb",
  "ــ\u064Dـ", // "tanween kasr",
  "ــ\u064Cـ", // "tanween damm",
];

const diacToCopy = [
  "\u064e", // "fat-ha",
  "\u064F", // "damma",
  "\u0650", // "kasra",
  "\u0652", // "sukun",
  "\u0651", // "shadda",
  "\u064B", // "tanween nasb",
  "\u064D", // "tanween kasr",
  "\u064C", // "tanween damm",
];

function fillKeyboardContent() {
  const row = document.getElementsByClassName("row")[0];
  row.innerHTML = "";
  for (let i = 0; i < 8; i++) {
    const keyboardLetter = document.createElement("button");
    keyboardLetter.classList.add("btn-dark");

    keyboardLetter.setAttribute("id", i);
    // adding copy on click to button
    keyboardLetter.addEventListener("click", function () {
      navigator.clipboard.writeText(diacToCopy[i]).then(
        function () {
          /* clipboard successfully set */
        },
        function () {
          /* clipboard write failed */
        }
      );
    });

    keyboardLetter.innerText = diac[i];
    row.appendChild(keyboardLetter);
  }
}
fillKeyboardContent();
