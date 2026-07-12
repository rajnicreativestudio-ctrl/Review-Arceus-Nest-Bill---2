const nameInput = document.getElementById("clientName");
const unitInput = document.getElementById("liveUnit");
const rateInput = document.getElementById("rate");
const upiInput = document.getElementById("upi");

const generateBtn = document.getElementById("generateBtn");

const invoice = document.getElementById("invoice");
const actionButtons = document.getElementById("actionButtons");

const invoiceId = document.getElementById("invoiceId");
const date = document.getElementById("date");

const showName = document.getElementById("showName");
const showUnit = document.getElementById("showUnit");
const showRate = document.getElementById("showRate");
const showUpi = document.getElementById("showUpi");
const total = document.getElementById("total");

generateBtn.addEventListener("click", () => {

const name = nameInput.value.trim();
const unit = Number(unitInput.value);
const rate = Number(rateInput.value);
const upi = upiInput.value.trim();

if(name==="" || unit<=0 || upi===""){
alert("Please fill all details.");
return;
}

const payable = unit * rate;

const randomInvoice =
"AN" +
Math.floor(Math.random()*900000+100000);

const today = new Date();

const todayDate =
today.toLocaleDateString("en-IN",{
day:"2-digit",
month:"short",
year:"numeric"
});

invoiceId.textContent = randomInvoice;
date.textContent = todayDate;

showName.textContent = name;
showUnit.textContent = unit;
showRate.textContent = rate;
showUpi.textContent = upi;
total.textContent = payable;

invoice.classList.remove("hide");
actionButtons.classList.remove("hide");

invoice.scrollIntoView({
behavior:"smooth"
});

});

