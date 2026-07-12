const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", async () => {

const bill = document.getElementById("invoice");

try{

const canvas = await html2canvas(bill);

canvas.toBlob(async(blob)=>{

const file = new File(
[blob],
"ArceusNest_Bill.png",
{
type:"image/png"
}
);

if(navigator.canShare && navigator.canShare({files:[file]})){

await navigator.share({

title:"Arceus Nest Bill",

text:"Generated using Arceus Nest Bill Generator",

files:[file]

});

}else{

alert("Sharing is not supported on this device.");

}

});

}catch(error){

alert("Unable to share bill.");

}

});

