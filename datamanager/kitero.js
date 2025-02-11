const sum = (a,b) =>{
    return a + b;
}
console.log(sum(6,7));

const obj = {}
obj.calculate_1 = sum;
console.log(obj.calculate_1(6,7));

obj.calculate_2 = (calc) => {
    const a = 6;
    const b = 7;
    return calc(a,b);
};
const res_1 = obj.calculate_2((szam_1,szam_2)=>{
    return szam_1 + szam_2;
});//function implementálása
console.log(res_1);

const res_2 = obj.calculate_2((szam_1,szam_2) =>{
    return szam_1 - szam_2;
});
console.log(res_2);

obj.calculate_3 = (szam_1,szam_2,callback) =>{
    const res = callback(szam_1,szam_2);
    return res;
}
const res_3 = obj.calculate_3(6,7,(szam_1,szam_2) =>{
    return szam_1 * szam_2;
});
console.log(res_3);

const thefunction= () =>{
    const szam = 8;
    const res_4 = obj.calculate_2((szam_1,szam_2) =>{
        return szam_1 * szam + szam_2;
    });
    console.log(res_4);
};
thefunction();