let button = document.getElementById('link')
let h1 = document.getElementById('h1')
let names = ['berk','emir','hakan','hasan','mehmet','mete','mustafa','kanya' ]
let words = ['mal','bayır domuzu','göt fırçası','kevaşe','zattorihanzo','sikkafalı','3+1','am kafa']
let kanya = ["kainat yaratıcısı","am ustası","zencigöt siken","gorilla","dünyadaki son insan"]

let gif = document.getElementsByTagName('iframe')
gif[0].style.visibility="hidden"; gif[1].style.visibility="hidden";gif[2].style.visibility="hidden";gif[3].style.visibility="hidden";gif[4].style.visibility="hidden"






const random = Math.floor(Math.random() * 8)
 




 function tıkla(){
    const randomGif =Math.floor(Math.random() * 5) 
    gif[randomGif].style.visibility="visible"
    
   
   
    var isimler = names[Math.floor(Math.random()*names.length)];
    var kelimeler = words[Math.floor(Math.random()*words.length)];
    var kanyalaf = kanya[Math.floor(Math.random()*kanya.length)];
    if(isimler.endsWith('kanya')){
        h1.innerText=` ${kanyalaf} kanya`
    }else{ 
    h1.innerText=`siktir git bu siteden ${kelimeler} ${isimler}`
    setTimeout(() => { 
     window.location.replace('https://youtu.be/PGAzq_ABKZc?t=1699') }, 8000);
    
    }
}


button.onclick=tıkla


