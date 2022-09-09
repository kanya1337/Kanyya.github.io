let button = document.getElementById('link')
let h1 = document.getElementById('h1')
let names = ['berk','emir','hakan','hasan','mehmet','mete','mustafa','kanya' ]
let words = ['mal','bayır domuzu','göt fırçası','kevaşe','zattorihanzo','sikkafalı','3+1','am kafa']
let kanya = ["kainat yaratıcısı","am ustası","zencigöt siken","gorilla","dünyadaki son insan"]
const random = Math.floor(Math.random() * 8)




function tıkla(){
    var isimler = names[Math.floor(Math.random()*names.length)];
    var kelimeler = words[Math.floor(Math.random()*words.length)];
    var kanyalaf = kanya[Math.floor(Math.random()*kanya.length)];
    if(isimler.endsWith('kanya')){
        h1.innerText=` ${kanyalaf} kanya`
    }else{ 
    h1.innerText=`siktir git bu siteden ${kelimeler} ${isimler}`
    setTimeout(() => {
        window.location.replace('https://www.youtube.com/watch?v=tsQkwRof5Ko&ab_channel=Lunatic0120')
    }, 8000);
    }
}


button.onclick=tıkla


