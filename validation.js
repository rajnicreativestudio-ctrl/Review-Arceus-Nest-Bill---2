function validateForm() {

const name = document.getElementById("clientName").value.trim();

const unit = document.getElementById("liveUnit").value.trim();

const upi = document.getElementById("upi").value.trim();

if(name === ""){

alert("Please enter Client Name.");
return false;

}

if(unit === "" || Number(unit) <= 0){

alert("Please enter a valid Live Unit.");
return false;

}

const upiPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+$/;

if(!upiPattern.test(upi)){

alert("Please enter a valid UPI ID.");
return false;

}

return true;

}

generateBtn.addEventListener("click",(e)=>{

if(!validateForm()){

e.stopImmediatePropagation();

}

});

