// fetch(url).then(res=>res.json()).then(r=>console.log(r))
// https://jsonplaceholder.typicode.com/posts
// qite olke ve adam sayi listde obyekt icinde yazin

const url='https://restcountries.com/v3/all'
let secilenQite;
let array=[];

let qite = ['Avropa','Amerika','Asya','Afrika','Antarktika','Avustralia']
let esasQite = ['Europe','America','Asia','Africa','Antarctica','Australia']
let l = 0


for(let i = 0; i < 1; i++){
    let olkeDaxilEdin = prompt('Avropa,Amerika,Asya,Afrika,Antarktika,Avustralia')
    for(let j = 0; j < qite.length; j++){
        if(olkeDaxilEdin.toLowerCase() == qite[j].toLowerCase()){
            secilenQite=`${esasQite[j]}`
            l='j'
        }else{
            l--
        }
    }
    if(l <=0){
        --i
    }
}

console.log(secilenQite)

const a = async (x,y)=>{
    let b = await fetch(url)
    let c = await b.json()
    
    for(let i = 0; i < c.length; i++){
        
        let z = c[i].altSpellings.length-1
        if(d[i].continents == x){
            let o = c[i].altSpellings[z]
            let inS = c[i].population
            let countries = {
                olke : o,
                insanSayi : inS,
            }
            console.log(countries)
            y.push(countries)
        }
    }
    return y
}

console.log(a(secilenQite,array))
