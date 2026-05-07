// problem No. 1

const filterEvenNumbers =(num:number[]) => {
    return num.filter((num) => num % 2 === 0);
}
const evenNo = filterEvenNumbers([1,2,3,4,5,6]);
// console.log(evenNo)


// problem No. 2
const reverseString = (revr:string) => {
    return revr.split("").reverse().join("");
}
const revers1 = reverseString("typescript");
// console.log(revers1);


// problem No. 3

type StringOrNumber = string | number;

const checkType = (value: StringOrNumber) : string | number => {
    if(typeof value === "string"){
        return "String"
    }else{
        return "Number"
    }
}
const typeGuard = checkType("Rakib");
const typeGuard2 = checkType(77);
// console.log(typeGuard2)

// problem No. 4 

type User = {
    id:number,
    name:string,
    age:number
}
const getProperty =<X>(obj:X, key: keyof X) => {
    return obj[key];
}
const user : User = { id: 1, name: "John Doe", age: 21 };
const result = getProperty(user, "name");
// console.log(result);


// problem No. 5 

interface Book { 
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024 
    }

    const toggleReadStatus = (obj:Book) => {
        return {
            ...obj,
            isRead: true
        } 
    }
const myBook : Book= { 
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024 
};

const result2 =  toggleReadStatus(myBook);
// console.log(result2)


// problem No. 6

class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
}
class Student extends Person{
    grade:string;
    constructor(name:string, age:number,grade:string){
        super(name,age)
        this.grade = grade;
    }
    getDetails(){
        console.log(`"Name:${this.name}, Age::${this.age}, Grade: ${this.grade}"`)
    }
}
const student =new Student("Alice",20,"A")
student.getDetails()


// problem 7 

const getIntersection = (num1:number[],num2:number[]) => {
    return[]
}

