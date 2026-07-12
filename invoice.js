let invoiceCounter = 1;

function generateInvoiceNumber() {

const now = new Date();

const year = now.getFullYear();

const month = String(now.getMonth() + 1).padStart(2, "0");

const day = String(now.getDate()).padStart(2, "0");

const count = String(invoiceCounter).padStart(3, "0");

invoiceCounter++;

return `AN-${year}${month}${day}-${count}`;

}

function getCurrentDateTime() {

const now = new Date();

return now.toLocaleString("en-IN", {

day: "2-digit",

month: "short",

year: "numeric",

hour: "2-digit",

minute: "2-digit"

});

}

generateBtn.addEventListener("click", () => {

invoiceId.textContent = generateInvoiceNumber();

date.textContent = getCurrentDateTime();

});

