function fun(param){
    console.log(param.nev)
}
fun({nev: 'Cirmi'})
const csirke = fun
csirke({nev: 'Lajos'})

const funA = function(param){
    console.log(param.nev)
}
funA({nev: 'Kálmán'})

const funB = function(){
    console.log(this.nev)
}
const tojas = funB.bind({nev: 'Elek'})
tojas()

const funC = (param) => {
    console.log(param.nev)
}

const obj = {
    funA: (param) => {
        console.log(param.nev)
    },
    funB: (param) => {
        console.log(param.eletkor)
    }
}
const pers = {
    nev: 'János',
    eletkor: 27
}
obj.funA(pers)
obj.funB(pers)