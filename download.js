const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {

html2canvas(document.getElementById("invoice")).then(canvas=>{

const link=document.createElement("a");

link.download="ArceusNest_Bill.png";

link.href=canvas.toDataURL("image/png");

link.click();

});

});

