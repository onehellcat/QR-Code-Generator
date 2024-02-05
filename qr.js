let button = document.querySelector(".container button");
let qrImg = document.querySelector(".imgQr img");
let input = document.getElementById("input");

button.addEventListener("click", function () {
  let data = input.value;
  let qrSize = document.getElementById("qrSize");
  let size = qrSize.value;
  //----
  if (data.length > 0) {
    let imgSrc = `https://chart.googleapis.com/chart?chs=${size}&cht=qr&chl=${data}&choe=UTF-8`;
    console.log("Size: " + size + " | " + "Correction Value: ");
    qrImg.src = imgSrc;
    console.log(imgSrc);
  } else {
    console.log("empty");
  }
});
