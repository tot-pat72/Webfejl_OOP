const fv1 = (a,b) => {
    return a+b
}

const fv2 = (a,b,cb) => {
    const aa = cb(a,2)
    const bb = cb(b,4)
    return cb(aa,bb)
}

const res1 = fv2(5,7,(a,b) => {
    return a+b
})
const res2 = fv2(5,7,fv1)
console.log(res1)

const fv3 = (operator) => {
    if(operator === '-'){
        return(a,b) => {
            return a-b;
        }
    }
}
const fv4 = fv3('-')
console.log(fv4(5,7))



