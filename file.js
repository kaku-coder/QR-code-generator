let inputbox = document.querySelector(".qrimput");
let button = document.querySelector(".btn")
let qrimage = document.querySelector(".qrimage")




button.addEventListener("click", () => {

  // console.log(inputvalue)
  function callqr() {
    let inputvalue = inputbox.value;
  if (inputvalue == "") {
    alert("please give a value or give a link");
  } else {
  let image= qrimage.src =
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
    console.log(image)
    qrimage.alt =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data={inputvalue}";
  }
  }
  callqr()
})