var link;
function randomkod() {
    let random_sec = python_kodlar[Math.floor(Math.random() * python_kodlar.length)];
    let resim = document.getElementById("kod");
    let bilgi = document.getElementById("bilgi");
    let img = document.createElement("img");
    img.src = random_sec.kod_resmi;
    console.log(resim.children.length);

    if(resim.children.length>0) 
        {
            resim.removeChild(resim.firstChild);
        }
        
    resim.appendChild(img);
    bilgi.innerHTML = random_sec.aciklama;
    link = random_sec.link;
}
function indir()
{
    if(link!=undefined){
     location.href = link;
    }
    else{
        alert("Resim indirebilmek için rastgele kod oluşturun.")
    }
}
