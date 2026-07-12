const liveUnitInput = document.getElementById("liveUnit");
const rateField = document.getElementById("rate");

const totalPreview = document.createElement("p");

totalPreview.style.color = "#ffffff";
totalPreview.style.textAlign = "center";
totalPreview.style.fontSize = "18px";
totalPreview.style.fontWeight = "bold";
totalPreview.style.marginTop = "15px";

document.querySelector(".glass").appendChild(totalPreview);

function updateTotal(){

const unit = Number(liveUnitInput.value) || 0;
const rate = Number(rateField.value) || 6;

const total = unit * rate;

totalPreview.innerHTML =
"Estimated Amount : ₹" + total;

}

liveUnitInput.addEventListener("input", updateTotal);

updateTotal();

