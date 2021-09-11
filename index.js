console.log("MERGED CLASS 1 ES6")
var arr=[1,2,3,4];
console.log(arr[2]);

var [one,two,three,four,five]=arr;//ES6 Destructuring
console.log(three);
console.log(four);
console.log(five);

function getscores(){
    return[90,100];
}

let[x,y,z]=getscores();
console.log(x);
console.log(y);
console.log(z);

const obj={
    fullname:"Prajakta Murge",
    email:"prajaktanm2019@gmail.com",
    age:19
}

console.log(obj.email)

let {dum,age,email,fullname} =obj;
console.log(fullname);
console.log(dum);

let person ={
    firstname:"Prajakta",
    lastname:"Murge",
    age1: 19,
    middlename:"DNA"
}
let{age1,firstname,lastname,middlename =""}=person;
console.log(age1);
console.log(firstname);
console.log(lastname);
console.log(middlename);

let add =(x,y)=>{
    return x+y;
};
console.log(add(10,20));

let ranks=[1,2,3,4,5,6];
console.log(
    ranks.map((e,index)=>{
        return e*100;
    })
);
console.log(
    ranks.forEach((e,index)=>{
        return e*100;
    })
);
let newmaparr=ranks.map((e,index)=>{
    console.log(e)
    console.log(index)
    if(e%2===0)
    return e
})
console.log(newmaparr);

let newfilterarr=ranks.filter((e,filter)=>{
    console.log(e)
    if(e%2===0)
    return e
})
console.log(newfilterarr);

