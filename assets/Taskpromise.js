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
    let b = fetch(url)
    let c = await b
    let d = await c.json()
    
    for(let i = 0; i < d.length; i++){
        
        let z = d[i].altSpellings.length-1
        if(d[i].continents == x){
            let o = d[i].altSpellings[z]
            let inS = d[i].population
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