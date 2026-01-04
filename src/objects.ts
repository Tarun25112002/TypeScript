const user :{name: string, age: number}={
    name: "Tarun",
    age: 23
}
console.log(user);
// when we dont know which type of data type we can add in future then we can do this

let persons:{[key:string]:string|number|undefined}={
    name:"Tarun Jha"
}
persons.age = 23
console.log(persons);
